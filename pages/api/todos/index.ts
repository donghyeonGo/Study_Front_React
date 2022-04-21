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

    try {
        const todos = Data.todo.getList();
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