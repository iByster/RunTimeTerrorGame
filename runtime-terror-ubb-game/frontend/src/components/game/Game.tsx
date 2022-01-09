import { useParams } from 'react-router-dom';
import './Game.css';
import Player from '../player/Player';
import { createRef, useEffect, useRef, useState } from 'react';
import { IProjectile, Projectile } from '../Projectile/Projectile';
import { generateProjectiles } from '../../utils/Projectiles/generateProjectiles';

const Game = () => {
  const [projectilesWave1, setProjectilesWave1] = useState<IProjectile[]>([]);
  const [projectilesWave2, setProjectilesWave2] = useState<IProjectile[]>([]);
  const playerRef = useRef<any>(null);
  const { levelId } = useParams();
  const [timeUntilGameStart, setTimeUntilGameStart] = useState(3);

  useEffect(() => {
    setProjectilesWave1(generateProjectiles(8, 0));
    setProjectilesWave2(generateProjectiles(8, 2500));
    // setProjectilesWave3(generateProjectiles(50, 5000));
  }, []);

  useEffect(() => {
    // setInterval(() => {
    //   setProjectilesWave1(generateProjectiles(8));
    // }, 19800);
    setInterval(() => {
      setProjectilesWave1(generateProjectiles(8, 0));
    }, 13800);
    setInterval(() => {
      setProjectilesWave2(generateProjectiles(8, 2500));
    }, 24000);
  }, [projectilesWave1, projectilesWave2]);

  useEffect(() => {
    //    Facem un countdown
    const countdownInterval = setInterval(() => {
      if (timeUntilGameStart > 0) {
        setTimeUntilGameStart(timeUntilGameStart - 1);
        // console.log('Ceva');
      }
    }, 1000);
    return () => clearInterval(countdownInterval);
  }, [timeUntilGameStart]);

  function isCollide(a: any, b: any) {
    return !(
        ((a.y + a.height) < (b.y)) ||
        (a.y > (b.y + b.height)) ||
        ((a.x + a.width) < b.x) ||
        (a.x > (b.x + b.width))
    );
  }

  const collision = () => {
    if (playerRef.current) {
      console.log(playerRef.current.clientHeight);
      // console.log(playerRef.current.clientX);
      console.log(playerRef.current.getBoundingClientRect());
    }
  }

  collision();
  
 const handleCollision = (projectileRef: any) => {
   if (projectileRef.current && playerRef.current) {
     console.log(isCollide(projectileRef.current.getBoundingClientRect(), playerRef.current.getBoundingClientRect()))
  }
 }
  if (timeUntilGameStart === 0) {
    //Jocul se desfasoara aici
    return (
      <div className={'container'}>
        <h1>Level {levelId}</h1>
        <Player ref={playerRef} player={{ life: 100, items: [] }} />
        {projectilesWave1 &&
          projectilesWave1.map((projectile) => (
            <Projectile
              spawnAfter={projectile.spawnAfter}
              speed={projectile.speed}
              positionY={projectile.positionY}
              type={projectile.type}
              key={Math.random()}
              handleCollision={handleCollision}
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
              handleCollision={handleCollision}
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
