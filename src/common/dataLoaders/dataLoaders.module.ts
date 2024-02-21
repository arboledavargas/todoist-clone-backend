import { Module } from "@nestjs/common";
import { LoadersService } from "./DataLoader";
import { TaskModule } from "../../tasks/task.module";

@Module({
  providers: [LoadersService],
  exports: [LoadersService],
  imports: [TaskModule]
})
export class DataLoadersModule {

}