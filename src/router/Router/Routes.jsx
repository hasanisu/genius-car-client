import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import SignUp from "../../pages/SignUp/SignUp";
import Checkout from "../../pages/Checkout/Checkout";
import Orders from "../../pages/Orders/Orders";




export const router = createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      children:[
        {
          path:'/',
          element: <Home></Home>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
         path:'/signUp',
         element:<SignUp></SignUp>
        },
        {
         path:'/checkout/:id',
         element: <Checkout></Checkout>,
         loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path: '/orders',
          element: <Orders></Orders>
        }
      ]
    }
  ])