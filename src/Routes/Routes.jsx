import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages/Home";

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

    ]
  },
]);
 export default router