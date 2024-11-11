import { useState, useEffect } from "react";
import { useMutation } from '@tanstack/react-query';
import { ICreateTodoDto } from "../../data-access/dto/CreateTodo.dto";
import { TodoService } from "../../data-access/service/Todo.service";
import { useNavigate } from "react-router";

export default function CreateTodo() {

    const [title, setTitle] = useState("");
    const navigate = useNavigate();

    const { mutate, isLoading, isSuccess, data } = useMutation({
        mutationFn: (body: ICreateTodoDto) => {
            return TodoService.createTodo(body);
        }
    });
    
    // ===== EFFECTS =====
    useEffect(() => {
        if(isSuccess) navigate(`/todos/${data?.id}`);
    }, [isSuccess]);
    

    // ===== FUNCTIONS =====
    const handleSubmit = () => {
        if(isLoading) return;
        const body: ICreateTodoDto = {
            title: title,
            userId: 1
        }
        mutate(body);
    }

    return (
        <div>
            <h3>Create Todo</h3>
            <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <button onClick={handleSubmit} disabled={isLoading}>Create</button>
        </div>
    );
}

