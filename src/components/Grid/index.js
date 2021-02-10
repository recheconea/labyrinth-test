import React from 'react';
import Cell from '../Cell';
import map from '../../assets/maps/map1.json';


const grid = (props) => {
  return (
    <div className="level">
      {
        map.grid.map(row => {
          return <div className="row">{row.map(cell => <Cell {...cell} />)}</div>
        })
      }
    </div>
  );
};

export default grid;
