import {database} from "../database/index";
import { Request, Response } from "express";

export class FindTaskController {
    async handle(request: Request, response: Response){
        const id = request.params.id;

        const task = await database.task.findUnique({
            where:{
                id: Number(id)
            }
        });

        if (!task) {
            return response.status(404).json({error: "Task not found"});
        }

        return response.json(task);
    }
}