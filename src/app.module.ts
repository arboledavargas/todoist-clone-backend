import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { providers } from './app.providers';
import { TaskModule } from "./tasks/task.module";
import { GraphQl } from "./common/graphql/graphQlModule";
@Module({
  imports: [
    TaskModule,
    GraphQl,
  ],
  controllers: [AppController],
  providers,
})
export class AppModule {}
