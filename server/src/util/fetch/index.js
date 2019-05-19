import { ApolloError } from 'apollo-server-express';
import axios from 'axios';

require('dotenv').config();

const qfetch = (api, opts = {}) => {
  return axios({
    method: opts.method || 'GET',
    url: api,
    params: opts.params,
    headers: opts.headers,
  })
    .then(response => {
      return response;
    })
    .catch(error => {
      /* istanbul ignore next */ throw new ApolloError('API Error', {
        error: error.response.data,
      });
    });
};

export default qfetch;
