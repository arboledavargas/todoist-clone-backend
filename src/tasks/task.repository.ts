import { Injectable } from "@nestjs/common";
import { PrismaService } from "../common/prisma.service";
import { User } from "../models/user.model";
import { Task } from "../models/task.model";
import { SubTask } from "../models/subtask.model";

@Injectable()
export class TaskRepository {
  constructor(private readonly db: PrismaService){

  }

  async getTasksByUserId(userId: string):Promise<Task[]>{
    const rawResult = await this.db.task.findMany({
      include: {
        subTasks: true
      },
      where: {
        userId: userId
      }
    })

    return rawResult.map(t => new Task({
      id: t.id,
      content: t.content,
      done: t.done,
      title: t.title,
      dueDate: t.dueDate,
      subTasks: t.subTasks?.map(s => new SubTask({
        id: s.id,
        content: s.content,
        done: s.done,
        title: s.title,
        dueDate: s.dueDate
      }))
    }))
  }
}