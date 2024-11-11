import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { ITodo } from "src/pages/todos/data-access/models/Todo.model";
import { TodoService } from "src/pages/todos/data-access/service/Todo.service";

export default function ListTodos() {
    const [todos, setTodos] = useState<ITodo[]>([]);
    const [id, setId] = useState<number>(0);
    const queryClient = useQueryClient();

    useEffect(() => {
        TodoService.getTodos().then((response) => {
            setTodos(response);
        }); 
    }, []);

    const clickGetDataByKey = () => {
        const data = queryClient.getQueryData(['todo', id]);
        console.log(data, id);
    }

    return <div>
        <h1>List Todos</h1>
        <input type="text" onChange={(e) => setId(Number(e.target.value))} />
        <button onClick={clickGetDataByKey}>Get Data By Key</button>
        <ul>
            {
                todos.map((todo) => (
                    <Link to={`/todos/${todo.id}`} key={todo.id}>
                        <li>{todo.title}</li>
                    </Link>
                ))
            }
        </ul>
    </div>
};

