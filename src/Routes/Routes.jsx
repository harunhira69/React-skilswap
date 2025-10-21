import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";

import Home from "../Pages/Home";
import SkillsCrad from "../Pages/SkillsCrad";
import SkilDetails from "../Pages/SkilDetails";
import Auth from "../Layout/Auth";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement:<h3>404 Not Found</h3>,
    children:[
        {
            path:'/home',
            element:<Home></Home>,
            loader:()=>fetch('/skill.json')
           
            
        },
     {
        path: '/card-details/:id',
        element:<SkilDetails></SkilDetails>,
        loader:()=>fetch('/skill.json')
     }

    ]
  },
  {
    index:true,
    element:'/'
  },
  {
    path:'/auth',
    element:<Auth></Auth>,
    children:[
      {
        path:'login',
        element:<Login></Login>

      },
      {
        path:'signup',
        element:<Signup></Signup>
      }
    ]
  }
]);
 export default router