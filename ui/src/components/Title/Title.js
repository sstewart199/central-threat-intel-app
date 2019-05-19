import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ titleText }) => {
  return <div className="header-text">{titleText}</div>;
};

Title.propTypes = {
  titleText: PropTypes.string.isRequired,
};

export default Title;
