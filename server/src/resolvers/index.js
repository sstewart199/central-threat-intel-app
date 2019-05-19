import abuseIPResolvers from './abuseIP';
import xforceResolvers from './xforce';

const resolvers = [...abuseIPResolvers, ...xforceResolvers];

export default resolvers;
