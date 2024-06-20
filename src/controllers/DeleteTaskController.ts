import {database} from "../database/index";
import { Request, Response } from "express";

export class DeleteTaskController {
    async handle(request: Request, response: Response){
        const id = request.params.id;

        const task = await database.task.delete({
            where: {
                id: Number(id)
            }
        });

        if (!task) {
            return response.status(404).json({error: "Task not found"});
        }

        return response.json(task);
    }
}