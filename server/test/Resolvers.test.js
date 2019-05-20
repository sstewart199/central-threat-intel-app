/**
 * This test runner will find all test files in the src/resolvers directory
 * Each test file should export a function that makes an assertion.
 */
import glob from 'glob';
import path from 'path';

const RESOLVERS_DIRECTORY = path.join(process.cwd(), './src/resolvers/');

describe('Resolvers', () => {
  const testFiles = glob.sync(`${RESOLVERS_DIRECTORY}**/*.test.js`);

  testFiles.forEach(file => {
    const fileName = file.substr(file.lastIndexOf('/') + 1);
    describe(fileName, () => {
      // eslint-disable-next-line
      const resolvers = require(file);
      Object.entries(resolvers).forEach(([name, fn]) => {
        it(name, () => Promise.resolve(fn()));
      });
    });
  });
});
