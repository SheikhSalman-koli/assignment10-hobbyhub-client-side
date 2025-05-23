import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Signin from "../Pages/Signin";
import SignUp from "../Pages/SignUp";
import AllGroups from "../Pages/AllGroups";
import CreateGroup from "../Pages/CreateGroup";
import MyGroup from "../Pages/MyGroup";
import PrivetRout from "./PrivetRout";
import GroupDetails from "../Pages/GroupDetails";
import Update from "../Pages/Update";
import NotFound from "../Pages/NotFound";

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
                element: <PrivetRout>
                    <CreateGroup></CreateGroup>
                </PrivetRout>
                // Component: CreateGroup
            },
            {
                path: 'details/:id',
                loader: ({params})=> fetch(`http://localhost:3000/groups/${params.id}`),
                element: <PrivetRout>
                    <GroupDetails></GroupDetails>
                </PrivetRout>
                // Component: GroupDetails
            },
              {
                path: 'mygroup',
                element: <PrivetRout>
                    <MyGroup></MyGroup>
                </PrivetRout>
                // Component: MyGroup
            },
            {
                path: 'update/:id',
                loader: ({params})=> fetch(`http://localhost:3000/groups/${params.id}`),
                Component: Update
            },
            {
                path: '/signin',
                Component: Signin
            },
            {
                path: '/signup',
                Component: SignUp
            },
            {
                path: '*',
                Component: NotFound
            }
        ]
    }
]) 