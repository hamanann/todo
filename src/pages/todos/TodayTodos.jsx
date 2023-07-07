import { Suspense } from 'react';
import { Await, useLoaderData, defer } from 'react-router-dom';
import { todosData } from '../../data/todos';
import { areDatesSame } from '../../utils/date';

import styles from './TodayTodos.module.css';
import TodoList from './TodoList';

export async function loader() {
  const todos = todosData.filter(todo =>
    areDatesSame(new Date(), new Date(todo.dueDate))
  );
  const todosPromise = new Promise(resolve =>
    setTimeout(() => {
      resolve(todos);
    }, 500)
  );
  return defer({ todos: todosPromise });
}

export default function Todos() {
  const dataPromise = useLoaderData();

  return (
    <>
      {/* <div className={styles.container}>
       <div className={styles.todos}> */}
      <Suspense fallback={<h3>Loading todos...</h3>}>
        <Await resolve={dataPromise.todos}>
          {todos => {
            return <TodoList title='Today' todos={todos} showProject />;
          }}
        </Await>
      </Suspense>
      {/* </div>
    </div> */}
    </>
  );
}
