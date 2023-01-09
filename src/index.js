import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Prediction from './components/Prediction';
import Palm_Reading from './components/Palm_Reading';
import Career from './components/Career';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/prediction",
    element: <Prediction />,
  },{
    path: "/palm_Reading",
    element: <Palm_Reading />,
  },{
    path: "/career",
    element: <Career />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
