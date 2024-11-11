import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "src/App";
import { AuthRoutes } from "src/pages/auth/Auth.routes";
import { DragDropFileRoutes } from "src/pages/drag-drop/DragDropFile.routes";
import { PostsRoutes } from "src/pages/posts/Posts.routes";
import { TodoRoutes } from "src/pages/todos/Todo.routes";

export const AppRoutes = createBrowserRouter([
    AuthRoutes,
    {
        path: "/",
        element: <App />,
        children: [
            TodoRoutes,
            PostsRoutes,
            DragDropFileRoutes
        ]
    },
    {
        // Catch-all route for 404
        path: '*', // This matches any route that doesn't match the above
        element: <Navigate to="/" replace />,
    },
]);