import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu";
import OurShop from "../Pages/OurShop/OurShop";
import LogIn from "../Pages/LogIn/LogIn";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes";
import DashBoard from "../LayOut/DashBoard";
import MyCart from "../Pages/DashBoard/MyCart/MyCart";
import UserHome from "../Pages/DashBoard/UserHome/UserHome";
import Reservation from "../Pages/DashBoard/Reservation/Reservation";
import UsersInfo from "../Pages/DashBoard/UsersInfo/UsersInfo";
import AddItem from "../Pages/DashBoard/AddItem/AddItem";
import AdminRoute from "./AdminRoute";
import ManageItem from "../Pages/DashBoard/ManageItem/ManageItem";
import Payment from "../Pages/DashBoard/Payment/Payment";
import AdminHome from "../Pages/DashBoard/AdminHome/AdminHome";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
            path: "/",
            element: <Home/>
        },
        {
          path: '/menu',
          element: <PrivateRoutes><Menu/></PrivateRoutes>
        },
        {
          path: '/shop/:category',
          element: <OurShop/>
        },
        {
          path: '/login',
          element: <LogIn/>
        },
        {
          path: '/signup',
          element: <SignUp/>
        },
        {
          path: '/signup',
          element: <SignUp/>
        }
      ]
    },
    // DashBoard
    {
      path: 'dashboard',
      element: <PrivateRoutes><DashBoard/></PrivateRoutes>,
      children: [
        {
          path: 'mycart',
          element: <MyCart/>
        },
        {
          path: 'user',
          element: <UserHome/>
        },
        {
          path: 'payment',
          element: <Payment/>
        },
        {
          path: 'reserve',
          element: <Reservation/>
        },
        {
          path: 'adminHome',
          element: <AdminRoute><AdminHome/></AdminRoute>
        },
        {
          path: 'users',
          element: <AdminRoute><UsersInfo/></AdminRoute>
        },
        {
          path: 'addItem',
          element: <AdminRoute><AddItem/></AdminRoute>
        },
        {
          path: 'manageItems',
          element: <AdminRoute><ManageItem/></AdminRoute>
        },
      ]
    }
  ]);