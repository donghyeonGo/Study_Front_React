import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TodoType } from "../types/todo";


interface TodoReduxState {
    todos: TodoType[];
}

//* 초기상태
const initialState: TodoReduxState = {
    todos: [],
}

const todo = createSlice({
    name: "todo",
    initialState,
    reducers: {
        //* todo 변경하기
        setTodo(state, action: PayloadAction<TodoType[]>) {
            state.todos = action.payload;
        },
    },
});

export const todoActions = { ...todo.actions };

export default todo;

