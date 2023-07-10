import { useState } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';

import MainLayout from './components/MainLayout';
import TodosLayout from './pages/todos/TodosLayout';
import TodayTodos, {
  loader as todayTodoLoader,
} from './pages/todos/TodayTodos';
import ProjectTodos, {
  loader as projectTodosLoader,
} from './pages/todos/ProjectTodos';

import {
  loader as todosLayoutLoader,
  loader,
} from './pages/todos/TodosSidebar';
import NotFound from './pages/todos/NotFound';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<h2>Home Page</h2>} />
      <Route path='todos' element={<TodosLayout />} loader={todosLayoutLoader}>
        <Route index element={<TodayTodos />} loader={todayTodoLoader} />
        <Route path='upcoming' element={<h2>Upcoming</h2>} />
        <Route path='projects' element={<h2>all projects</h2>} />
        <Route
          path='projects/:projectId'
          element={<ProjectTodos />}
          loader={projectTodosLoader}
        />
      </Route>
      <Route path='habits' element={<h2>Habits page</h2>} />
      <Route path='tracker' element={<h2>Time tracker page</h2>} />
      <Route path='*' element={<NotFound />} />
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
