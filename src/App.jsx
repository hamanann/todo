import { useState } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';

import MainLayout from './components/MainLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<h2>Home Page</h2>} />
      <Route path='todos' element={<h2>Todos page</h2>} />
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
