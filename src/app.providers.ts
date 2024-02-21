import { Provider } from '@nestjs/common'
import { TasksResolver } from './tasks/tasks.resolver'
import { AppService } from "./app.service";
import { PrismaService } from "./common/database/prisma.service";
import { TaskRepository } from "./tasks/task.repository";
import { TasksService } from "./tasks/tasks.service";
import { LoadersService } from "./common/dataLoaders/DataLoader";


export const providers: Provider[] = [
  LoadersService,
  PrismaService,
  AppService,
  TasksResolver,
  TasksService,
  TaskRepository,
]