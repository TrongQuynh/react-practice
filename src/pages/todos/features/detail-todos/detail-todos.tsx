import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { TodoService } from "src/pages/todos/data-access/service/Todo.service";
import { useQuery, useQueryClient } from '@tanstack/react-query';

export default function DetailTodos() {

    const { id } = useParams();
    const queryClient = useQueryClient();

    const { data: todo, isLoading } = useQuery({
        queryKey: ['todo', id],
        queryFn: () => TodoService.getTodoById(Number(id))
    });

    useEffect(() => {
        return () => {
            queryClient.removeQueries({ queryKey: ['todo', id] });
        };
    }, [id, queryClient]);

    if(isLoading) return <div>Loading...</div>;

    return (
        <div>
            <h1>Detail Todos</h1>
            <p><b>ID:</b> {todo?.id}</p>
            <p><b>Name:</b> {todo?.title}</p>
            <p><b>Completed:</b> {todo?.completed ? "Completed" : "Not Completed"}</p>
            <Link to="/todos">Back to List</Link>
        </div>
    )
};

