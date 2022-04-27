import React from "react";
import { GetServerSideProps, NextPage } from "next";
import TodoList from "../components/TodoList";
import { TodoType } from "../types/todo";
import { getTodosAPI } from "../lib/api/todo";
import { wrapper } from "../store";
import { todoActions } from "../store/todo";

interface IProps {
    todos: TodoType[];
}

const app: NextPage<IProps> = () => {
    return <TodoList todos={[]} />;
};

export const getServerSideProps = wrapper.getServerSideProps((store) =>
    async ({ req }) => {
        console.log("store: ", store);
        try {
            const { data } = await getTodosAPI();
            store.dispatch(todoActions.setTodo(data));
            return { props: {} };
        } catch (e) {
            console.log(e);
            return { props: {} }
        }
    }
);

// export const getServerSideProps: GetServerSideProps = async () => {
//     try {
//         const { data } = await getTodosAPI();
//         return { props: { todos: data } };
//     } catch (e) {
//         console.log(e);
//         return { props: { todos: [] } };
//     }
// }

export default app;