import React, { useEffect, useRef, useState } from 'react';
import { generateProjectiles } from '../../utils/Projectiles/generateProjectiles';
import { getProjectileType } from '../../utils/Projectiles/getProjectileType';
import Player from '../player/Player';
// import Player from '../player/Player';
import { IProjectile, Projectile } from '../Projectile/Projectile';

const MaxProjectilesAtOnce = 7;

interface GameOneProps {}

export const GameOne: React.FC<GameOneProps> = ({}) => {
  const [start, setStart] = useState<boolean>(true);
  const [projectilesWave1, setProjectilesWave1] = useState<IProjectile[]>([]);
  const [projectilesWave2, setProjectilesWave2] = useState<IProjectile[]>([]);
  const [projectilesWave3, setProjectilesWave3] = useState<IProjectile[]>([]);
  const [launchProjectile, setLaunchProjectiles] = useState<
    JSX.Element | undefined
  >();
  //   setInterval(() => {
  //     // fetch
  //     setProjectiles([...projectiles, 1]);
  //   }, 3000);

  useEffect(() => {
    setProjectilesWave1(generateProjectiles(50, 0));
    setProjectilesWave2(generateProjectiles(50, 2500));
    // setProjectilesWave3(generateProjectiles(50, 5000));
  }, []);

  // useEffect(() => {
  //   // setInterval(() => {
  //   //   setProjectilesWave1(generateProjectiles(8));
  //   // }, 19800);
  //   setInterval(() => {
  //     setProjectilesWave1(generateProjectiles(8, 0));
  //   }, 13800);
  //   setInterval(() => {
  //     setProjectilesWave2(generateProjectiles(8, 2500));
  //   }, 24000);
  // }, [projectilesWave1, projectilesWave2, start]);

  // function generateProjectile() {
  //   if (projectiles.length > 0) {
  //     const projectile = projectiles.pop();
  //     setProjectiles(projectiles.filter((prj) => prj !== projectile));
  //     const positionY = `${(Math.floor(Math.random() * 7) + 1) * 10 + 4}vw`;
  //    return <Projectile positionY={positionY} />;
  //   }

  //   }

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

  //   console.log(projectiles);

  return (
    <div
      className={`background`}
      onKeyDown={move}
      tabIndex={0}
      ref={(input) => input && input.focus()}
    >
      {/* {projectilesWave1 &&
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
        ))} */}
        {/* {projectilesWave3 &&
        projectilesWave3.map((projectile) => (
          <Projectile
            spawnAfter={projectile.spawnAfter}
            speed={projectile.speed}
            positionY={projectile.positionY}
            type={projectile.type}
            key={Math.random()}
          />
        ))} */}
      {/* <Player/> */}
    </div>
  );
};
