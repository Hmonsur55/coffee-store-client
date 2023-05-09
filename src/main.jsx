import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App';
import AddCoffee from './components/AddCoffee';
import UpdatedCoffee from './components/UpdatedCoffee';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>
  },
  {
    path: '/addcoffee',
    element: <AddCoffee></AddCoffee>
  }, {
    path: '/updatecoffee',
    element:<UpdatedCoffee></UpdatedCoffee>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
