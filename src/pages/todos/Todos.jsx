import { Suspense } from 'react';
import { Await, useLoaderData, defer } from 'react-router-dom';
import { todos } from '../../data/todos';
import TodoCard from './TodoCard';

export async function loader({ request }) {
  //   const url = new URL(request.url);
  const generalTodos = todos.filter(todo => todo.project === 'general');
  console.log(generalTodos);
  const todosPromise = new Promise(resolve =>
    setTimeout(() => {
      resolve(generalTodos);
    }, 500)
  );
  return defer({ todos: todosPromise });
}

export default function Todos() {
  const todosPromise = useLoaderData();

  return (
    <>
      <Suspense fallback={<h3>Loading todos...</h3>}>
        <Await resolve={todosPromise.todos}>
          {todos => {
            return (
              <>
                {todos.map(todo => {
                  return <TodoCard key={todo.id} todo={todo} showDate />;
                })}
              </>
            );
          }}
        </Await>
      </Suspense>
    </>
  );
}
