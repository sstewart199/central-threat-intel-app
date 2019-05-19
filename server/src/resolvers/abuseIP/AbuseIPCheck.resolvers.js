import fetch from '../../util/fetch';

const getData = res => res.data.data;

export const abuseIP = (root, { ip }) =>
  fetch(`https://api.abuseipdb.com/api/v2/check?ipAddress=${ip}`, {
    headers: {
      Key: process.env.ABUSEIP_KEY,
    },
  }).then(getData);

export const abuseIPCheckResolvers = {
  Query: {
    abuseIP,
  },
};
