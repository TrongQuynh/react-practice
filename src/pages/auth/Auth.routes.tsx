import { NonIndexRouteObject } from "react-router";
import Auth from ".";
import SignIn from "./features/sign-in/SignIn";

export const AuthRoutes: NonIndexRouteObject = {
    path: "/auth",
    element: <Auth/>,
    children: [
        {
            path: "/auth/sign-in",
            element: <SignIn/>
        }
    ]
}