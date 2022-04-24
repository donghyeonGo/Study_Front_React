import axios from ".";
import { TodoType } from "../../types/todo";

interface AddTodoAPIBody {
    text: string;
    color: TodoType["color"];
}


export const addTodoAPI = (body: AddTodoAPIBody) =>
    axios.post("/api/todos", body);

export const checkTodoAPI = (id: number) => axios.patch(`api/todos/${id}`);
export const getTodosAPI = () => axios.get<TodoType[]>("api/todos");