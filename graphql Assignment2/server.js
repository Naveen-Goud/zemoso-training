const { ApolloServer, gql } = require('apollo-server');
const axios = require('axios');
import { typeDefs } from './schema';
import {resolvers} from './resolver'

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
 