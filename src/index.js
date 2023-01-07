import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
  } from 'react-router-dom';
import Root from './routes/root';
import ErrorPage from './error-page';
import Login from './routes/login';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      // TODO: implement loaders to gather data from the server
      // https://github.com/remix-run/react-router/blob/main/docs/start/tutorial.md#loading-data
    },
    {
      path: "/login",
      element: <Login />,
    }
  ]);

  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
