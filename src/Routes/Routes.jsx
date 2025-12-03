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
import AllskillDetails from "../Pages/allSkillDetails/AllskillDetails"
import BookSession from "../Pages/BookSeesion/Booksession";
import Blog from "../Pages/FooterPage/Blog";
import FAQ from "../Pages/FooterPage/Faq";
import PrivacyPolicy from "../Pages/FooterPage/PrivacyPolicy";
import TermsOfService from "../Pages/FooterPage/TermsOfService";
import Jobs from "../Pages/FooterPage/Jobs";
import PressKit from "../Pages/FooterPage/PressKit";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement:<ErrorPage></ErrorPage>,
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
        path: "/allSkill-details/:id",
        element:<AllskillDetails></AllskillDetails>,
        loader: async () => {
          const res = await fetch("/allSkill.json");
          const data = await res.json();
          return data;
        },
      },
      {
  path: "/book-session/:id",
  element: <BookSession />,
  loader: async () => {
    const res = await fetch("/allSkill.json"); // use allSkill.json
    const data = await res.json();
    return data;
  },
},

        {
          path:'/contact',
          Component:ContactPage

        },
      {
        path: "/card-details/:id",
        element: 
          <SkilDetails />
       ,
        loader: async () => {
          const res = await fetch("/skill.json");
          const data = await res.json();
          return data;
        },
      },
      {
        path:'/blog',
        Component:Blog

      },
      {
        path:'/faq',
        Component:FAQ
      },
      {
        path:'/privacy-policy',
        Component:PrivacyPolicy
      },
      {
        path:'terms',
        Component:TermsOfService
      },
      {
        path:'/jobs',
        Component:Jobs
      },
      {
        path:'/press',
        Component:PressKit
      }

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