import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from "@nestjs/common";
import { GraphQLModule } from '@nestjs/graphql';
import { TaskModule } from "../../tasks/task.module";
import { DataLoadersModule } from "../dataLoaders/dataLoaders.module";
import { GraphqlConfig } from "./graphql-config";

@Module({
  imports: [
    TaskModule,
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useClass: GraphqlConfig,
      imports: [DataLoadersModule],
    })
  ]
})
export class GraphQl {

}