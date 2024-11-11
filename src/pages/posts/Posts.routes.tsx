import { NonIndexRouteObject } from "react-router";
import Posts from ".";

export const PostsRoutes: NonIndexRouteObject = {
    path: "/posts",
    element: <Posts/>,
    children:[]
};