import { xforce } from '../XforceCheck.resolvers';

const XforceTest = async () => {
  const response = await xforce(null, { ip: '1.2.3.4' });
  expect(response.ip).toEqual('1.2.3.4');
  expect(response.score).toEqual(1);
  expect(response.reason).toEqual('Content found on multihoster');
};

export default XforceTest;
