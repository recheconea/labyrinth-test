import React from 'react';
import Tile from '../Tile';
import Player from '../Player';

const Cell = ({ type, hasPlayer }) => {
  return hasPlayer ? <Player /> :
    <Tile type={type} hasPlayer={hasPlayer} />
  
};

export default Cell;
