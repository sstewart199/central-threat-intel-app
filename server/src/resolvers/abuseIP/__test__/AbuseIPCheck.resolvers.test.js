import { abuseIP } from '../AbuseIPCheck.resolvers';

const AbuseIPTest = async () => {
  const response = await abuseIP(null, { ip: '1.2.3.4' });
  expect(response.ipAddress).toEqual('1.2.3.4');
  expect(response.countryCode).toEqual('AU');
  expect(response.isPublic).toEqual(true);
};

export default AbuseIPTest;
