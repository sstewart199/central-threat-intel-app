import { gql } from 'apollo-server-express';
import defs from './index.gql';

const Query = gql`
  type Query {
    _empty: String
  }
`;

const typeDefs = [Query, defs];

export default typeDefs;
