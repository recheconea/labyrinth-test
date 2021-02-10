import React, { useState } from 'react';

import './styles.scss';

const Player = (props) => {
  const [position, setPosition] = useState({x: 0, y: 0});
  return (
    <div className="player">
      <div className="round"></div>
    </div>
  )
};

export default Player;