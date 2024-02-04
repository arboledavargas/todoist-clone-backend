import { Args, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { Task } from '../graphql'
import { TasksService } from "./tasks.service";


@Resolver('Task')
export class TasksResolver {

  constructor(private readonly tasksService: TasksService){

  }

  @Query()
  async tasks(@Args('dueDate') dueDate:string):Promise<Omit<Task , 'subTasks'>[]>{
    return [{
      id: 'testid',
      title: 'testTitle',
      content: 'sdfsd',
      done: false,
      dueDate: 'test due date',
    }]
  }

  @ResolveField()
  async subTasks(): Promise<Task['subTasks']> {
    console.log("pide subasks")
    return [{
      id: 'test subtask',
      title: 'testTitle subtask',
      content: 'sdfsd subtask',
      done: false,
      dueDate: 'test due date subtask',
    }]
  }
  
}