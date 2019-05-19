/* istanbul ignore file */
import { app, server } from './server';

const port = process.env.PORT || 3600;

app.listen({ port }, () => {
  // eslint-disable-next-line no-console
  console.log(`GraphQL server ready at http://localhost:${port}${server.graphqlPath}`);
});
