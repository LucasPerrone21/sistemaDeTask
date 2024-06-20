import {database} from "../database/index";
import { Request, Response } from "express";

export class ListTasksController {
    async handle(request: Request, response: Response){
        const {title, description} = request.body;

        const tasks = await database.task.findMany();

        return response.json(tasks);
    }
}