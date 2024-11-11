import { Outlet } from "react-router";
import { Link } from "react-router-dom";

export default function Todos() {
    return <div>
        <h1>Todos Layout</h1>
        <ul>
            <li><Link to="/todos">List Todos</Link></li>
            <li><Link to="/todos/create">Create</Link></li>
        </ul>
        <Outlet/>
    </div>
};

