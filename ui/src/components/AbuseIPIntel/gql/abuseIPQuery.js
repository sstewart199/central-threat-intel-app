/* istanbul ignore file */
import gql from 'graphql-tag';

export default gql`
  query abuseIPQuery($ip: String!) {
    abuseIP(ip: $ip) {
      abuseConfidenceScore
      ipAddress
      isPublic
      ipVersion
      isWhitelisted
      usageType
      domain
    }
  }
`;
