import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import DetailNews from "../pages/detailNews/DetaliNews";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import PrivateRoute from "../components/privateRout/PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path: '/',
            element: <Home></Home>,
            loader: () =>  fetch('/news.json')
        },
        {
            path: '/article/:id',
            element: <PrivateRoute><DetailNews></DetailNews></PrivateRoute>,
            loader: () =>  fetch('/news.json')
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
      ]
    },
  ]);

  export default router;