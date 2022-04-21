import axios from ".";
import { TodoType } from "../../types/todo";

export const checkTodoAPI = (id: number) => axios.patch(`api/todos/${id}`);
export const getTodosAPI = () => axios.get<TodoType[]>("api/todos");