/* istanbul ignore file */
import gql from 'graphql-tag';

export default gql`
  query xforceQuery($ip: String!) {
    xforce(ip: $ip) {
      ip
      score
      reason
      reasonDescription
      geo {
        country
      }
    }
  }
`;
