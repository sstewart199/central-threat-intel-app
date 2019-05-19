import express from 'express';
import { ApolloServer, makeExecutableSchema } from 'apollo-server-express';
// Import Resolvers, Context , TypeDefs and MockResolvers
import resolvers from './resolvers';
import typeDefs from './typeDefs';

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const server = new ApolloServer({
  schema,
  mockEntireSchema: false,
  debug: true,
  tracing: true,
  formatError: error => {
    return error;
  },
});

const app = express();

server.applyMiddleware({ app });

export { server, app };
