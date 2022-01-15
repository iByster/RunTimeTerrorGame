import React from 'react';
import { useDeadContext } from '../game/Game';
import './Player.css';

interface PlayerProps {
  player?: {
    life: number;
    items: Array<string>;
  };
  ref: any;
}

function move(e: any) {
  if (e.code === 'KeyA' || e.code === 'ArrowLeft') {
    if (
      parseInt(
        getComputedStyle(document.documentElement).getPropertyValue(
          '--player-pos'
        ),
        undefined
      ) -
        1 >=
      0
    )
      document.documentElement.style.setProperty(
        '--player-pos',
        (
          parseInt(
            getComputedStyle(document.documentElement).getPropertyValue(
              '--player-pos'
            ),
            undefined
          ) - 1
        ).toString()
      );
  } else if (e.code === 'KeyD' || e.code === 'ArrowRight') {
    if (
      parseInt(
        getComputedStyle(document.documentElement).getPropertyValue(
          '--player-pos'
        ),
        undefined
      ) +
        1 <=
      100
    )
      document.documentElement.style.setProperty(
        '--player-pos',
        (
          parseInt(
            getComputedStyle(document.documentElement).getPropertyValue(
              '--player-pos'
            ),
            undefined
          ) + 1
        ).toString()
      );
  }
}

const Player: React.FC<PlayerProps> = React.forwardRef<HTMLDivElement>((props, ref) => {
  const deadContext = useDeadContext();
  
  return (
    <div
      className={`background`}
      onKeyDown={move}
      tabIndex={0}
      ref={(input) => input && input.focus()}
    >
      <div ref={ref} className={`${deadContext.dead ? 'player-dead' : 'player'}`}></div>
    </div>
  );
});

export default Player;
