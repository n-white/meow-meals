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

  // Note, when redux state changes need to result in changing the router state,
  // propagate the state change to a component and let the component trigger the router change.
  // For this, you can keep a form submission state in the Redux store and update the variable 
  // on API call response of the form.
  // https://www.pluralsight.com/guides/using-react-router-with-redux


  // TODO: implement react redux
  // https://react-redux.js.org/introduction/getting-started
  
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
