import { Args, Context, Mutation, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { Task, SetTaskDonePayload, CreateTaskInput } from '../graphql';
import { TasksService } from "./tasks.service";
import { LoadersService } from "../common/dataLoaders/DataLoader";
@Resolver('Task')
export class TasksResolver {

  constructor(private readonly tasksService: TasksService){

  }

  @Query()
  async tasks(@Args('dueDate') dueDate:string):Promise<Task[]> {
    const userId = 'e1565906-efd3-4b21-896c-ed0a7eccf0af';

    const result = await this.tasksService.getUserTasksByDueDate(userId, new Date(dueDate));

    return result.map(t => t.serialize());
  }

  @ResolveField()
  async subTasks(
    @Parent() task: Task,
    @Context() { dataLoader }: { dataLoader: LoadersService }
  ): Promise<Task['subTasks']> {

    const subTaskLoader = dataLoader.taskDataLoader()

    const subtasksBatch = await subTaskLoader.load(task.id)

    return subtasksBatch?.subTasks.map(s => s.serialize()) ?? []
  }

  @Mutation()
  async setTaskDone(@Args('taskId') taskId: string): Promise<SetTaskDonePayload>{
    const updatedTask = await this.tasksService.setTaskAsDone(taskId)

    return {
      success: true,
      task: updatedTask.serialize()
    }
  }

  @Mutation()
  async createTask(@Args('input') createTaskInput: CreateTaskInput): Promise<Task>{
    const userId = 'e1565906-efd3-4b21-896c-ed0a7eccf0af';
    const newTask = await this.tasksService.createTaskForUser(userId, createTaskInput)

    return newTask.serialize()
  }
  
}