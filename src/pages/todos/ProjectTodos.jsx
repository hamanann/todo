import { Suspense } from 'react';
import { Await, useLoaderData, defer, useLocation } from 'react-router-dom';

import { getDefaultProjectGeneral, getTodosProject } from '../../api';
import TodoList from './TodoList';
import TodosLoading from './TodosLoading';

export async function loader({ request }) {
  const url = new URL(request.url);
  const pathname = decodeURI(url.pathname);
  let projectId = pathname.split('/').slice(-1)[0];
  let projectPromise;
  if (projectId === 'general') {
    projectPromise = getDefaultProjectGeneral().then(project =>
      getTodosProject(project.id)
    );
  } else {
    projectPromise = getTodosProject(projectId);
  }

  return defer({ projectPromise });
}

export default function ProjectTodos() {
  const { projectPromise } = useLoaderData();

  return (
    <>
      <Suspense fallback={<TodosLoading />}>
        <Await resolve={projectPromise}>
          {project => {
            return (
              <TodoList
                key={project.id}
                title={project.title}
                todos={project.todo}
                showDate
              />
            );
          }}
        </Await>
      </Suspense>
    </>
  );
}
