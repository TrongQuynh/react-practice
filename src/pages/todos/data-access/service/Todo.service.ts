
import { ITodo } from "src/pages/todos/data-access/models/Todo.model";
import { DeleteRequest, GetRequest, PostRequest, PutRequest } from "src/services/api/HttpRequest";
import { TodoApi } from "src/services/api/todos/Todo.api";
import { ICreateTodoDto } from "../dto/CreateTodo.dto";

export class TodoService {
    static async getTodos() {
        const response:Promise<ITodo[]> = await GetRequest(TodoApi.GET_TO_DO());
        return response;
    }

    static async getTodoById(id: number) {
        const response:Promise<ITodo> = await GetRequest(TodoApi.DETAIL_TO_DO(id));
        return response;
    }

    static async createTodo(body: ICreateTodoDto) {
        const response:Promise<ITodo> = await PostRequest(TodoApi.CREATE_TO_DO(), body);
        return response;
    }

    static async updateTodo(id: number, body: ITodo) {
        const response:Promise<ITodo> = await PutRequest(TodoApi.UPDATE_TO_DO(id), body);
        return response;
    }

    static async deleteTodo(id: number) {
        const response:Promise<ITodo> = await DeleteRequest(TodoApi.DELETE_TO_DO(id));
        return response;
    }
}