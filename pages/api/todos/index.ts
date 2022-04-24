import { NextApiRequest, NextApiResponse } from "next";
import { TodoType } from "../../../types/todo";
import fs from "fs";
import Data from "../../../lib/data";


export default (req: NextApiRequest, res: NextApiResponse) => {
    // if (req.method === "GET") {
    //     try {
    //         const todosBuffer = fs.readFileSync("/Users/godonghyeon/Study/Study_Front_React/data/todos.json");
    //         const todosString = todosBuffer.toString();
    //         if (!todosString) {
    //             res.statusCode = 200;
    //             res.send([]);
    //         }
    //         const todos: TodoType[] = JSON.parse(todosString);
    //         res.statusCode = 200;
    //         return res.send(todos);
    //     } catch (e) {
    //         console.log(e);
    //         res.statusCode = 500;
    //         res.send(e);
    //     }
    //     return res.send("hello next!");
    // }

    if (req.method === "POST") {
        const { text, color } = req.body;
        if (!text || !color) {
            res.statusCode = 400;
            return res.send("text 혹은 color가 없습니다");
        }
        const todos = Data.todo.getList();
        let todoId: number;
        if (todos.length > 0) {
            todoId = todos[todos.length - 1].id + 1;
        } else {
            todoId = 1;
        }
        const newTodo = {
            id: todoId,
            text,
            color,
            checked: false,
        };

        Data.todo.write([...todos, newTodo]);
        res.statusCode = 200;
        res.end();
    }
    try {
        const todos = Data.todo.getList();
        let todoId: number;
        if (todos.length > 0) {
            todoId = todos[todos.length - 1].id + 1;
        } else {
            todoId = 1;
        }

        res.statusCode = 200;
        return res.send(todos);
    } catch (e) {
        console.log(e);
        res.statusCode = 500;
        res.send(e);
    }

    res.statusCode = 405;
    console.log(res.statusCode);
    return res.end();

}