import {database} from "../database/index";
import { Request, Response } from "express";

export class UpdateTaskController{
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

        const {title, description, completed} = request.body;

        if (!title && !description && !completed) {
            return response.status(400).json({error: "You need to pass every field to update the task"});
        }

        task.title = title;
        task.description = description;
        task.completed = completed;

        const updatedTask = await database.task.update({
            where: {
                id: Number(id)
            },
            data: {
                title: task.title,
                description: task.description,
                completed: task.completed,
                updatedAt: new Date()
            }
        })

        return response.json(task);
    }
}