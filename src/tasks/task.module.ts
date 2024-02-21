import { Module } from "@nestjs/common";
import { TaskRepository } from "./task.repository";
import { TasksResolver } from "./tasks.resolver";
import { TasksService } from "./tasks.service";
import { DatabaseModule } from "../common/database/database.module";

@Module({
  providers: [
    TasksResolver,
    TasksService,
    TaskRepository,
  ],
  exports: [
    TasksService
  ],
  imports:[DatabaseModule]
})
export class TaskModule {

}