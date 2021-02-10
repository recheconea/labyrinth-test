import React from 'react';

import './styles.scss';

const tile = ({ type='regular' }) => {
  return <div className={`tile ${type}`}></div>;
};

export default tile;
