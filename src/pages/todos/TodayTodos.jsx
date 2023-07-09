import { Suspense } from 'react';
import { Await, useLoaderData, defer } from 'react-router-dom';
import { getTodosToday } from '../../api';

import styles from './TodayTodos.module.css';
import TodoList from './TodoList';
import TodosLoading from './TodosLoading';

export async function loader() {
  return defer({ todosPromise: getTodosToday() });
}

export default function Todos() {
  const { todosPromise } = useLoaderData();

  return (
    <>
      {/* <div className={styles.container}>
       <div className={styles.todos}> */}
      <Suspense fallback={<TodosLoading />}>
        <Await resolve={todosPromise}>
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
