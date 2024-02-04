import { Injectable } from "@nestjs/common";
import { TaskRepository } from "./task.repository";
import { Task } from "../models/task.model";

@Injectable()
export class TasksService {
  constructor(private readonly taskRepository:TaskRepository){

  }

  async getUserTasks(userId: string):Promise<Task[]>{
    return await this.taskRepository.getTasksByUserId(userId)
  }
}