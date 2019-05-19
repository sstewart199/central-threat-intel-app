/**
 * This is a sanity check test suite for ensuring the typeDefs are all valid,
 * queries return the data types they are meant to etc.
 *
 * You should rarely have to edit this runner, as it looks inside the cases directory for
 * test cases.
 *
 * The only time you will need to edit - is if you are testing a typeDef that adds a new Scalar type
 * like an enum - see the ApolloServer constructor below for more info
 * Simply add a new test case following the required structure
 */
import {
  ApolloServer,
  mockServer,
  makeExecutableSchema,
  addMockFunctionsToSchema,
} from 'apollo-server-express';
import { createTestClient } from 'apollo-server-testing';
import gql from 'graphql-tag';
import glob from 'glob';
import path from 'path';
import typeDefs from '../src/typeDefs';
import resolvers from '../src/resolvers';

// Extends jest so we have snapshots in separate files
require('jest-specific-snapshot');

jest.unmock('node-fetch');

const SNAPSHOT_DIRECTORY = '__snapshots__';
const TEST_CASE_DIRECTORY = path.join(__dirname, './cases/');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  mocks: {
    Boolean: () => false,
    ID: () => '0',
    Int: () => 0,
    Float: () => 0.0,
    String: () => 'String',
    JSON: () => 'json',
    HTTP_Method: () => 'GET',
    // This is where you add more scalar types
  },
});

describe('Type definitions', () => {
  test('are valid', async () => {
    expect(async () => {
      const MockServer = mockServer(typeDefs);

      await MockServer.query(`{ __schema { types { name } } }`);
    }).not.toThrow();
  });

  test('resolvers match schema', () => {
    const mockSchema = makeExecutableSchema({
      typeDefs,
      resolvers,
      resolverValidationOptions: { requireResolversForArgs: true },
    });

    addMockFunctionsToSchema({
      schema: mockSchema,
      mocks: {
        Boolean: () => false,
        ID: () => '1',
        Int: () => 1,
        Float: () => 12.34,
        String: () => 'Dog',
      },
    });
  });
});

describe('Schema Snapshots', () => {
  // Find all files in the test case directory with the correct file name
  const caseFiles = glob.sync(`${TEST_CASE_DIRECTORY}**/*.test.cases.js`);
  caseFiles.forEach(filePath => {
    // eslint-disable-next-line
    const testCases = require(filePath);
    testCases.forEach(testCase => {
      // Pull out all the fields from the test case
      const { id, query: testQuery, variables } = testCase;
      test(`query: ${id}`, async () => {
        const { query } = createTestClient(server);
        return expect(
          await query({
            query: gql(testQuery), // Execute test case query
            variables,
          })
        ).toMatchSpecificSnapshot(`./${SNAPSHOT_DIRECTORY}/${id}.snapshot`); // Compare results against snapshot
      });
    });
  });
});
