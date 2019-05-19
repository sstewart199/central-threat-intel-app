import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import * as serviceWorker from './serviceWorker';
import App from './App';

const apolloClient = new ApolloClient({
  link: new HttpLink({
    uri: 'http://localhost:3600/graphql',
  }),
  connectToDevTools: true,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
