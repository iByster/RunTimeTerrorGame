import React from 'react'
import './Player.css';

interface PlayerProps{
    player:{
      life : number,
      items : Array<string>
    }
}

function move(e: any) {
  if(e.code === 'KeyA' || e.code === 'arrowLeft'){
    if(parseInt(getComputedStyle(document.documentElement).getPropertyValue('--player-pos'),undefined)-1 >= 0)
      document.documentElement.style.setProperty('--player-pos',(parseInt(getComputedStyle(document.documentElement).getPropertyValue('--player-pos'),undefined)-1).toString());
  } else if(e.code === 'KeyD' || e.code === 'arrowRight'){
    if(parseInt(getComputedStyle(document.documentElement).getPropertyValue('--player-pos'),undefined)+1 <= 100)
    document.documentElement.style.setProperty('--player-pos',(parseInt(getComputedStyle(document.documentElement).getPropertyValue('--player-pos'),undefined)+1).toString());
  }
}

export const Player: React.FC<PlayerProps> = ({player:PlayerProps}) => {
  return(
    <div className={`background`} onKeyDown={move} tabIndex={0}>
      <div className={`player`}></div>
    </div>
  );
};