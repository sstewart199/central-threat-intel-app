/* istanbul ignore file */
import { XFORCE_QUERY } from '../..';

export const ERRORED_MOCKS = [
  {
    request: {
      query: XFORCE_QUERY,
      variables: { ip: '1' },
    },
    error: new Error('ERROR'),
    result: {},
  },
];

export const MOCKS = [
  {
    request: {
      query: XFORCE_QUERY,
      variables: { ip: '1.2.2.2' },
    },
    result: {
      data: {
        xforce: {
          ip: '1.2.3.4',
          score: 1,
          reason: 'Content found on multihoster',
          reasonDescription:
            'At least one of the websites that is hosted on this IP address contains content of the aforementioned category.',
          geo: {
            country: 'Australia',
            countrycode: 'AU',
          },
        },
      },
    },
  },
];
