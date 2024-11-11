import { ITodo } from "src/pages/todos/data-access/models/Todo.model";

export type TodoActions = {
    addTodo: (todo: ITodo) => void;
}

export type TodoActionType = {
    type: "ADD_TODO";
    payload: ITodo;
}

