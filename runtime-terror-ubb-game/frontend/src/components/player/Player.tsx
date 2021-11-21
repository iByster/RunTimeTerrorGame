import React from 'react'
import './Player.css';

interface PlayerProps{
    player:{
      life : number,
      items : Array<string>
    }
}

export const Player: React.FC<PlayerProps> = ({player:PlayerProps}) => {
  function onKeyDown(e: any) {
    console.log(e);
  }
  return(
    <div className={`background`}>
      <div className={`player`} onKeyDown={onKeyDown} tabIndex={-1}></div>
    </div>
  );
};