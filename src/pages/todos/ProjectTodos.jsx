import { Suspense } from 'react';
import { Await, useLoaderData, defer, useLocation } from 'react-router-dom';

import { getDefaultProjectGeneral, getTodosProject } from '../../api';
import styles from './TodayTodos.module.css';
import TodoList from './TodoList';

export async function loader({ request }) {
  const url = new URL(request.url);
  const pathname = decodeURI(url.pathname);
  let projectId = pathname.split('/').slice(-1)[0];
  if (projectId === 'general') {
    let projectGeneral = await getDefaultProjectGeneral();
    projectId = projectGeneral.id;
  }
  const projectPromise = getTodosProject(projectId);

  return defer({ projectPromise });
}

export default function ProjectTodos() {
  const { projectPromise } = useLoaderData();

  return (
    <>
      <Suspense fallback={<h3>Loading project...</h3>}>
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
