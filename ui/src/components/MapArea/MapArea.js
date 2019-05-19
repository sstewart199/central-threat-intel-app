import React, { Fragment } from 'react';
import { graphql, withApollo } from 'react-apollo';
import PropTypes from 'prop-types';
import Map from './components/Map';
import MAP_QUERY from './gql/mapQuery';

const MapArea = ({ data }) => {
  const renderMap = () => {
    const { country, countrycode } = data.xforce.geo;

    return <Map countryCode={countrycode} countryName={country} />;
  };

  return (
    <Fragment>
      {!data.error && data.loading && <div>LOADING MAP...</div>}
      {!data.error && !data.loading && renderMap()}
    </Fragment>
  );
};

MapArea.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default graphql(MAP_QUERY, {
  options: props => ({
    errorPolicy: 'all',
    fetPolicy: 'cache-and-network',
    variables: {
      ip: props.ipAddress,
    },
  }),
})(withApollo(MapArea));
