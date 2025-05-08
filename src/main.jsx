import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Layout/MainLayout.jsx';
import Home from './pages/Home/Home.jsx';
import Login from './pages/Login/Login.jsx';

import store from './app/store'
import { Provider } from 'react-redux'


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
        path:"/home",
        element:<Home></Home>
      },
      {
        path:"/",
        element:<Login></Login>
      }
    ]
    
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Provider store={store}>
     <RouterProvider router={router} />
    </Provider>
  
  </StrictMode>,
)
