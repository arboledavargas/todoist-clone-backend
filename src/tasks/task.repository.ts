import { Injectable } from "@nestjs/common";
import { PrismaService } from "../common/database/prisma.service";
import { Task } from "../models/task.model";
import { SubTask } from "../models/subtask.model";
import { SubtasksBatch } from "../models/subtask.model";
@Injectable()
export class TaskRepository {
  
  constructor(private readonly db: PrismaService){
    
  }

  async getSubtasksByTasksIds(taksIds: readonly string[]): Promise<SubtasksBatch[]> {

    const rawSubtasks = await this.db.task.findMany({
      where: {
        id: {
          in: [...taksIds]
        }
      },
      select: {
        id: true,
        subTasks: true
      }
    })

    return rawSubtasks.map(t => ({
      task: {
        id: t.id,
      },
      subTasks: t.subTasks.map(s => SubTask.createExisting({
        content: s.content,
        done: s.done,
        id: s.id,
        title: s.title,
        dueDate: s.dueDate,
      }))
    }))
  }

  async getTaskById(id: string):Promise<Task | null>{ 
    const rawResult = await this.db.task.findUnique({
      where: {
        id: id
      }
    })

    if(!rawResult) return null;

    return Task.createExisting({
      id: rawResult.id,
      content: rawResult.content,
      done: rawResult.done,
      title: rawResult.title,
      dueDate: rawResult.dueDate,
      userId: rawResult.userId,
    })
  } 

  async getUserTasksByDueDate(userId: string, dueDate: { from: Date, to: Date }):Promise<Task[]>{
    const rawResult = await this.db.task.findMany({
      where: {
        userId: userId,
        dueDate: {
          gte: dueDate.from,
          lte: dueDate.to,
        }
      }
    })

    return rawResult.map(t => Task.createExisting({
      id: t.id,
      content: t.content,
      done: t.done,
      title: t.title,
      dueDate: t.dueDate,
      userId: t.userId ?? '',
    }))
  }

  async save(task: Task):Promise<void> {
    if(task.isNew) {
      await this.db.task.create({
        data: {
          content: task.content,
          done: task.done,
          dueDate: task.dueDate,
          title: task.title,
          id: task.id,
          userId: task.userId,
        }
      })
    } else {
      await this.db.task.update({
        data: {
          content: task.content,
          done: task.done,
          dueDate: task.dueDate,
          title: task.title,
        },
        where: {
          id: task.id
        }
      })
    }
  }
}