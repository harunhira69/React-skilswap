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
            loader: async () => {
      const res = await fetch('/skill.json');
      return res.json(); // now useLoaderData() will be an array
    }
        }
    ]
  },
]);
 export default router