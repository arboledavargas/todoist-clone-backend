import { Injectable } from "@nestjs/common";
import { ApolloDriverConfig } from '@nestjs/apollo';
import { GqlOptionsFactory } from "@nestjs/graphql";
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { LoadersService } from "../dataLoaders/DataLoader";

@Injectable()
export class GraphqlConfig implements GqlOptionsFactory {
  constructor(private DataLoader: LoadersService){

  }

  createGqlOptions(): ApolloDriverConfig {
    return {
      typePaths: ['./**/*.graphql'],
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      context: () => ({
        dataLoader: this.DataLoader
      })
    }
  }


}