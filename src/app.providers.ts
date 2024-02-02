import { Provider } from '@nestjs/common'
import { TasksResolver } from './tasks/tasks.resolver'
import { AppService } from "./app.service";

export const providers: Provider[] = [
  AppService,
  TasksResolver
]