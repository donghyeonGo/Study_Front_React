import { readFileSync, writeFileSync } from "fs";
import { TodoType } from "../../types/todo";

const write = async (todos: TodoType[]) => {
    writeFileSync("/Users/godonghyeon/Study/Study_Front_React/data/todos.json", JSON.stringify(todos));
};

const getList = () => {
    const todosBuffer = readFileSync("/Users/godonghyeon/Study/Study_Front_React/data/todos.json");
    const todosString = todosBuffer.toString();
    if (!todosString) {
        return [];
    }
    const todos: TodoType[] = JSON.parse(todosString);
    return todos;
};

const exist = ({ id }: { id: number }) => {
    const todos = getList();
    const todo = todos.some((todo) => todo.id === id);
    return todo;
};

export default { getList, exist, write };
