import { useParams } from 'react-router-dom';
import './Game.css';
import Player from '../player/Player';
import { useEffect, useRef, useState } from 'react';
import { IProjectile, Projectile } from '../Projectile/Projectile';
import { generateProjectiles } from '../../utils/Projectiles/generateProjectiles';

const Game = () => {
  const [projectilesWave1, setProjectilesWave1] = useState<IProjectile[]>([]);
  const [projectilesWave2, setProjectilesWave2] = useState<IProjectile[]>([]);

  const { levelId } = useParams();
  const [timeUntilGameStart, setTimeUntilGameStart] = useState(3);

  useEffect(() => {
    setProjectilesWave1(generateProjectiles(8, 0));
    setProjectilesWave2(generateProjectiles(8, 2500));
    // setProjectilesWave3(generateProjectiles(50, 5000));
  }, []);

  useEffect(() => {
    //    Facem un countdown
    const countdownInterval = setInterval(() => {
      if (timeUntilGameStart > 0) {
        setTimeUntilGameStart(timeUntilGameStart - 1);
        console.log('Ceva');
      }
    }, 1000);
    return () => clearInterval(countdownInterval);
  }, [timeUntilGameStart]);
  if (timeUntilGameStart === 0) {
    //Jocul se desfasoara aici
    return (
      <div className={'container'}>
        <h1>Level {levelId}</h1>
        <Player player={{ life: 100, items: [] }} />
        {projectilesWave1 &&
          projectilesWave1.map((projectile) => (
            <Projectile
              spawnAfter={projectile.spawnAfter}
              speed={projectile.speed}
              positionY={projectile.positionY}
              type={projectile.type}
              key={Math.random()}
            />
          ))}
        {projectilesWave2 &&
          projectilesWave2.map((projectile) => (
            <Projectile
              spawnAfter={projectile.spawnAfter}
              speed={projectile.speed}
              positionY={projectile.positionY}
              type={projectile.type}
              key={Math.random()}
            />
          ))}
      </div>
    );
  } else {
    return (
      <div className={'container'} id={'countdown'}>
        <h1 id={'countdownText'}>{timeUntilGameStart}</h1>
      </div>
    );
  }
};

export default Game;
