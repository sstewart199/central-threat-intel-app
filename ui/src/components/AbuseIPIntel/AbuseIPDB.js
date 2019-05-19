import React, { Fragment } from 'react';
import { graphql, withApollo } from 'react-apollo';
import PropTypes from 'prop-types';
import {
  StructuredListBody,
  StructuredListCell,
  StructuredListHead,
  StructuredListRow,
  StructuredListWrapper,
  StructuredListSkeleton,
} from 'carbon-components-react';
import ABUSEIP_QUERY from './gql/abuseIPQuery';

const AbuseIPDB = ({ data }) => {
  const renderLoading = () => {
    return (
      <div style={{ width: '800px' }}>
        <StructuredListSkeleton rowCount={1} />
      </div>
    );
  };

  const renderAbuseIPIntel = () => {
    const {
      ipAddress,
      isPublic,
      ipVersion,
      isWhitelisted,
      abuseConfidenceScore,
      usageType,
      domain,
    } = data.abuseIP;
    return (
      <Fragment>
        <div className="threat-feed-title">AbuseIP Feed</div>
        <StructuredListWrapper>
          <StructuredListHead>
            <StructuredListRow head>
              <StructuredListCell head>IP Address</StructuredListCell>
              <StructuredListCell head>Public?</StructuredListCell>
              <StructuredListCell head>Version</StructuredListCell>
              <StructuredListCell head>Whitelisted?</StructuredListCell>
              <StructuredListCell head>Abuse Confidence Score</StructuredListCell>
              <StructuredListCell head>Usage Type</StructuredListCell>
              <StructuredListCell head>Domain</StructuredListCell>
            </StructuredListRow>
          </StructuredListHead>
          <StructuredListBody>
            <StructuredListRow>
              <StructuredListCell>{ipAddress}</StructuredListCell>
              <StructuredListCell>{isPublic ? 'True' : 'False'}</StructuredListCell>
              <StructuredListCell>{ipVersion}</StructuredListCell>
              <StructuredListCell>{isWhitelisted ? 'True' : 'False'}</StructuredListCell>
              <StructuredListCell>{abuseConfidenceScore}</StructuredListCell>
              <StructuredListCell>{usageType || 'N/A'}</StructuredListCell>
              <StructuredListCell>{domain}</StructuredListCell>
            </StructuredListRow>
          </StructuredListBody>
        </StructuredListWrapper>
      </Fragment>
    );
  };

  return (
    <Fragment>
      {!data.error && data.loading && renderLoading()}
      {!data.error && !data.loading && renderAbuseIPIntel()}
    </Fragment>
  );
};

AbuseIPDB.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default graphql(ABUSEIP_QUERY, {
  options: props => ({
    errorPolicy: 'all',
    fetPolicy: 'cache-and-network',
    variables: {
      ip: props.ipAddress,
    },
  }),
})(withApollo(AbuseIPDB));
