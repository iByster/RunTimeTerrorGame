import React from 'react'
import { Projectile } from '../Projectile/Projectile';
import './Player.css';

interface PlayerProps{
    // player:{
    //   life : number,
    //   items : Array<string>
    // }
}

// function move(e: any) {
//   if(e.code === 'KeyA' || e.code === 'ArrowLeft'){
//     if(parseInt(getComputedStyle(document.documentElement).getPropertyValue('--player-pos'),undefined)-1 >= 0)
//       document.documentElement.style.setProperty('--player-pos',(parseInt(getComputedStyle(document.documentElement).getPropertyValue('--player-pos'),undefined)-1).toString());
//   } else if(e.code === 'KeyD' || e.code === 'ArrowRight'){
//     if(parseInt(getComputedStyle(document.documentElement).getPropertyValue('--player-pos'),undefined)+1 <= 100)
//     document.documentElement.style.setProperty('--player-pos',(parseInt(getComputedStyle(document.documentElement).getPropertyValue('--player-pos'),undefined)+1).toString());
//   }
// }

const Player: React.FC<PlayerProps> = () => {
  // return <Projectile />
  return(
      <div className={`player`}></div>
  );
};

export default Player;