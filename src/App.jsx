import { useState } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';

import MainLayout from './components/MainLayout';
import TodosLayout from './pages/todos/TodosLayout';
import Todos, { loader as todosLoader } from './pages/todos/Todos';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<h2>Home Page</h2>} />
      <Route path='todos' element={<TodosLayout />}>
        <Route path='general' element={<Todos />} loader={todosLoader} />
        <Route path='today' element={<h2>today - todolist</h2>} />
        <Route path='upcoming' element={<h2>upcoming - todolist</h2>} />
        <Route path='projects' element={<h2>all projects</h2>} />
        <Route
          path='projects/:id'
          element={<h2>custom project - todolist</h2>}
        />
      </Route>
      <Route path='habits' element={<h2>Habits page</h2>} />
      <Route path='tracker' element={<h2>Time tracker page</h2>} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
