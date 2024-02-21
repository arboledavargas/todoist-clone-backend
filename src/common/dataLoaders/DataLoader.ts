import * as Dataloader from 'dataloader';
import { SubtasksBatch } from "../../models/subtask.model";
import { Injectable } from '@nestjs/common';
import { TasksService } from "../../tasks/tasks.service";

@Injectable()
export class LoadersService {
  constructor(
    private readonly taskService: TasksService,
  ){  }

  taskDataLoader(){
    return new Dataloader<string, (SubtasksBatch | null)>(async (tasksIds: readonly string[]) => {
      return await this.taskService.getSubtasksInBatch(tasksIds)
    })
  }
}