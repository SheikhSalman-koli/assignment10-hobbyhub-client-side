import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Signin from "../Pages/Signin";
import SignUp from "../Pages/SignUp";
import AllGroups from "../Pages/AllGroups";
import CreateGroup from "../Pages/CreateGroup";
import MyGroup from "../Pages/MyGroup";

export const router = createBrowserRouter([
    {
        path:'/',
        Component: Root,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: 'allgroup',
                Component: AllGroups
            },
              {
                path: 'create',
                Component: CreateGroup
            },
              {
                path: 'mygroup',
                Component: MyGroup
            },
            {
                path: '/signin',
                Component: Signin
            },
            {
                path: '/signup',
                Component: SignUp
            }
        ]
    }
]) 