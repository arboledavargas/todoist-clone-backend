import { Provider } from '@nestjs/common'
import { TasksResolver } from './tasks/tasks.resolver'
import { AppService } from "./app.service";
import { PrismaService } from "./common/prisma.service";
import { TaskRepository } from "./tasks/task.repository";
import { TasksService } from "./tasks/tasks.service";

export const providers: Provider[] = [
  PrismaService,
  AppService,
  TasksResolver,
  TasksService,
  TaskRepository,
]