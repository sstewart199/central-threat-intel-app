/* istanbul ignore file */
import { ABUSEIP_QUERY } from '../..';

export const ERRORED_MOCKS = [
  {
    request: {
      query: ABUSEIP_QUERY,
      variables: { ip: '1' },
    },
    error: new Error('ERROR'),
    result: {},
  },
];

export const MOCKS = [
  {
    request: {
      query: ABUSEIP_QUERY,
      variables: { ip: '1.2.2.2' },
    },
    result: {
      data: {
        abuseIP: {
          abuseConfidenceScore: 0,
          ipAddress: '1.2.3.5',
          isPublic: true,
          ipVersion: 4,
          isWhitelisted: false,
          usageType: 'Data Center/Web Hosting/Transit',
          domain: 'apnic.net',
        },
      },
    },
  },
];
