import React from "react";
import {Tile} from '../tile/Tile';
export const TileList = (props) => {
  const items = props.items;
  return (
    <div>
      {items.map((item,index) =>{ return <Tile item = {item} key ={index}/> })}
    </div>
  );
};
