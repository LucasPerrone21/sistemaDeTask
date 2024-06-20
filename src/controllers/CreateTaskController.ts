import {database} from "../database/index";
import { Request, Response } from "express";

export class CreateTaskController {
    async handle(request: Request, response: Response){
        const {title, description} = request.body;

        if (title === "" || description === "") {
            response.status(400).json({error: "Title and description are required"});
        }

        const task = await database.task.create({
            data:{
                title,
                description,
                completed: false
            }
        });

        return response.json(task);
    }
}