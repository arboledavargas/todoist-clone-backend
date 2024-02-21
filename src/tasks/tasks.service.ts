import { Injectable } from "@nestjs/common";
import { TaskRepository } from "./task.repository";
import { Task } from "../models/task.model";
import { SubtasksBatch } from "../models/subtask.model";
import { DateTime } from "luxon";
import { CreateTaskInput } from '../graphql'

@Injectable()
export class TasksService {

  constructor(private readonly taskRepository:TaskRepository){

  }

  async getUserTasksByDueDate(userId: string, dueDate: Date):Promise<Task[]>{
    const from = DateTime.fromJSDate(dueDate).startOf('day').toJSDate()
    const to = DateTime.fromJSDate(dueDate).endOf('day').toJSDate()
    
    return await this.taskRepository.getUserTasksByDueDate(userId, {
      from,
      to
    })
  }

  async getSubtasksInBatch(ids: readonly string[]):Promise<(SubtasksBatch | null)[]>{
    const subTasksBatches = await this.taskRepository.getSubtasksByTasksIds(ids);

    return ids.map(id => 
      subTasksBatches.find(subTasksBatch => subTasksBatch.task.id === id) ?? null
    )
  }

  async setTaskAsDone(taskId: string):Promise<Task>{
    const task = await this.taskRepository.getTaskById(taskId)

    if(!task) throw new Error('Task not found')

    task.setAsDone()

    await this.taskRepository.save(task)

    return task
  }

  async createTaskForUser(userId:string, taskInput: CreateTaskInput):Promise<Task> {
    const newTask = Task.createNew({
      content: taskInput.content,
      done: false,
      title: taskInput.title,
      dueDate: new Date(taskInput.dueDate),
      userId: userId,
    })

    await this.taskRepository.save(newTask)

    return newTask

  }
}