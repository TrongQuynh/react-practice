import Todos from ".";
import ListTodos from "./features/list-todos/list-todos";
import DetailTodos from "./features/detail-todos/detail-todos";
import { NonIndexRouteObject } from "react-router";
import ProtectedRoute from "src/setup/authentication/ProtectedRoute";
import CreateTodo from "./features/create-todo/CreateTodo";

export const TodoRoutes: NonIndexRouteObject = {
    path: "/todos",
    element: (
        <ProtectedRoute>
            <Todos/>
        </ProtectedRoute>
    ),
    children: [
        {
            path: "",
            element: <ListTodos/>
        },
        {
            path: ":id",
            element: <DetailTodos/>
        },
        {
            path: "create",
            element: <CreateTodo/>
        }
    ]
}
