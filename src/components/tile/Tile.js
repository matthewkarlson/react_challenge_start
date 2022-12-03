import React from "react";

export const Tile = (props) => {
  const item = Object.values(props.item);

  return (
    <div className="tile-container">
      {item.map((item,index)=> {
        return <p className ={index===0?'tile-title':'tile'} key={index}>{item}</p>
      })}
    </div>
  );
};
