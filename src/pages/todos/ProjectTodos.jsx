import { Suspense } from 'react';
import { Await, useLoaderData, defer } from 'react-router-dom';
import { todosData } from '../../data/todos';
import { areDatesSame } from '../../utils/date';

import styles from './TodayTodos.module.css';
import TodoList from './TodoList';

export async function loader({ request }) {
  const url = new URL(request.url);
  const pathname = decodeURI(url.pathname);
  const projectName = pathname.split('/').slice(-1)[0];
  const todos = todosData.filter(
    todo => todo.project.toLowerCase() === projectName.toLowerCase()
  );
  const todosPromise = new Promise(resolve =>
    setTimeout(() => {
      resolve(todos);
    }, 500)
  );
  return defer({ todosPromise, projectName });
}

export default function ProjectTodos() {
  const { projectName, todosPromise } = useLoaderData();

  return (
    <>
      <Suspense fallback={<h3>Loading project...</h3>}>
        <Await resolve={todosPromise}>
          {todos => {
            return (
              <TodoList
                key={projectName}
                title={projectName}
                todos={todos}
                showDate
              />
            );
          }}
        </Await>
      </Suspense>
    </>
  );
}
