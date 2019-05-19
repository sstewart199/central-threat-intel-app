import fetch from '../../util/fetch';

const getData = res => res.data;
const auth = `Basic ${Buffer.from(
  `${process.env.XFORCE_API_KEY}:${process.env.XFORCE_API_PASS}`
).toString('base64')}`;

export const xforce = (root, { ip }) =>
  fetch(`https://api.xforce.ibmcloud.com/ipr/${ip}`, {
    headers: {
      Authorization: auth,
    },
  }).then(getData);

export const xforceCheckResolvers = {
  Query: {
    xforce,
  },
};
