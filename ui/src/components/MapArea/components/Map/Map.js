import React from 'react';
import Plot from 'react-plotly.js';
import PropTypes from 'prop-types';
import getCountryISO3 from 'country-iso-2-to-3';

const Map = ({ countryCode, countryName }) => {
  const iso3countrycode = getCountryISO3(countryCode);
  return (
    <Plot
      data={[
        {
          type: 'scattergeo',
          mode: 'markers+text',
          locations: [iso3countrycode],
          marker: {
            size: [30],
          },
        },
      ]}
      layout={{
        width: 940,
        geo: {
          showland: true,
          landcolor: 'black',
          showframe: false,
          bgcolor: 'rgba(255, 255, 255, 0.0)',
        },
        title: 'IP Address Location',
        font: {
          color: 'white',
        },
        dragmode: 'zoom',
        mapbox: {
          center: {
            lat: 38.03697222,
            lon: -90.70916722,
          },
          style: 'dark',
          zoom: 1,
        },
        margin: {
          r: 20,
          t: 40,
          b: 20,
          l: 20,
          pad: 0,
        },
        paper_bgcolor: '#171717',
        plot_bgcolor: '#191A1A',
        showlegend: false,
        annotations: [
          {
            x: 0,
            y: 0,
            yref: 'paper',
            text: `Country: ${countryName}`,
            showarrow: false,
          },
        ],
      }}
      config={{ responsive: true, displayModeBar: false }}
    />
  );
};

Map.propTypes = {
  countryCode: PropTypes.string.isRequired,
  countryName: PropTypes.string.isRequired,
};

export default Map;
