import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Clients from './Components/Clients/Clients';
import Dashboard from './Components/Dashboard/Dashboard';
import Contact from './Components/Contact/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [{
      path: "/",
      element: <Home></Home>,
    },
    {
      path: "/about",
      element: <About></About>,
    },
    {
      path: "/clients",
      element: <Clients></Clients>,
    },
    {
      path: '/services',
      element: <Dashboard></Dashboard>
    },
    {
      path: '/contact',
      element: <Contact></Contact>
    }],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
