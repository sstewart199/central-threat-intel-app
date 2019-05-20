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
import XFORCE_QUERY from './gql/xforceQuery';

const XforceIntel = ({ data }) => {
  const renderLoading = () => {
    return (
      <div className="loading-skeleton">
        <StructuredListSkeleton rowCount={1} />
      </div>
    );
  };

  const renderXforceIntel = () => {
    const { ip, score, reason, reasonDescription } = data.xforce;
    const { country } = data.xforce.geo;

    return (
      <Fragment>
        <div className="threat-feed-title">X-Force Exhange Feed</div>
        <StructuredListWrapper>
          <StructuredListHead>
            <StructuredListRow head>
              <StructuredListCell head>IP Address</StructuredListCell>
              <StructuredListCell head>Risk Score</StructuredListCell>
              <StructuredListCell head>Reason</StructuredListCell>
              <StructuredListCell head>Reason Description</StructuredListCell>
              <StructuredListCell head>Country</StructuredListCell>
            </StructuredListRow>
          </StructuredListHead>
          <StructuredListBody>
            <StructuredListRow>
              <StructuredListCell>{ip}</StructuredListCell>
              <StructuredListCell noWrap>{score}</StructuredListCell>
              <StructuredListCell>{reason}</StructuredListCell>
              <StructuredListCell>{reasonDescription}</StructuredListCell>
              <StructuredListCell>{country}</StructuredListCell>
            </StructuredListRow>
          </StructuredListBody>
        </StructuredListWrapper>
      </Fragment>
    );
  };

  return (
    <Fragment>
      {!data.error && data.loading && renderLoading()}
      {!data.error && !data.loading && renderXforceIntel()}
    </Fragment>
  );
};

XforceIntel.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default graphql(XFORCE_QUERY, {
  options: props => ({
    errorPolicy: 'all',
    fetPolicy: 'cache-and-network',
    variables: {
      ip: props.ipAddress,
    },
  }),
})(withApollo(XforceIntel));
