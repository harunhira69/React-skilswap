import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";

import Home from "../Pages/Home";

import SkilDetails from "../Pages/SkilDetails";
import Auth from "../Layout/Auth";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import PrivateRoute from "./PrivateRoute";
import Profile from "../Pages/Profile";
import ForgetPassword from "../Pages/ForgetPassword";
import About from "../Pages/about/About";
import Allskill from "../Pages/Allskill/Allskill";
import ContactPage from "../Pages/ContactPage/ContactPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement:<h3>404 Not Found</h3>,
    children:[
      {
        index: true, // default route
        element: <Home />,
        loader: async () => {
          const res = await fetch("/skill.json");
          const data = await res.json();
          return data;
        },
      },
      {
        path: "/home",
        element: <Home />,
        loader: async () => {
          const res = await fetch("/skill.json");
          const data = await res.json();
          return data;
        },
     
      },
         {
              path:'/profile',
              element:<Profile></Profile>
        },
        {
          path:'/about',
          Component:About
        },
        {
          path:'/allSkills',
          element:<Allskill></Allskill>

        },
        {
          path:'/contact',
          Component:ContactPage

        },
      {
        path: "/card-details/:id",
        element: <PrivateRoute>
          <SkilDetails />
        </PrivateRoute>,
        loader: async () => {
          const res = await fetch("/skill.json");
          const data = await res.json();
          return data;
        },
      },
    ],
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
      },
    {
  path: 'forget-password',
  element: <ForgetPassword />
},
    ]
  }
]);
 export default router