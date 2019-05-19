/* istanbul ignore file */
import gql from 'graphql-tag';

export default gql`
  query mapQuery($ip: String!) {
    xforce(ip: $ip) {
      geo {
        country
        countrycode
      }
    }
  }
`;
