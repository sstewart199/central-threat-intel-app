import fetch from 'node-fetch';
import { app } from '../src/server';

describe('Express Server', () => {
  let expressApp;
  const port = 3002; // Make sure it doesnt conflict with already running app
  beforeAll(async () => {
    expressApp = app.listen(port);
  });
  it('should serve the GraphQL playground', async () => {
    const res = await fetch(`http://localhost:${port}/graphql?query={__type(name:"Query"){name}}`);
    expect((await res.json()).data).toMatchSnapshot();
  });

  afterAll(() => {
    expressApp.close();
  });
});
