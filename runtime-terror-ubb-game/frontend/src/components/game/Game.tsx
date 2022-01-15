import { useParams } from 'react-router-dom';
import './Game.css';
import Player from '../player/Player';
import React, { createRef, useEffect, useRef, useState } from 'react';
import { IProjectile, Projectile } from '../Projectile/Projectile';
import { generateProjectiles } from '../../utils/Projectiles/generateProjectiles';

const Game = React.memo(() => {
  const [projectilesWave1, setProjectilesWave1] = useState<IProjectile[]>([]);
  const [projectilesWave2, setProjectilesWave2] = useState<IProjectile[]>([]);
  const [projectilesWave3, setProjectilesWave3] = useState<IProjectile[]>([]);
  const [projectilesWave4, setProjectilesWave4] = useState<IProjectile[]>([]);
  const [projectilesWave5, setProjectilesWave5] = useState<IProjectile[]>([]);
  const [projectilesWave6, setProjectilesWave6] = useState<IProjectile[]>([]);
  const [projectilesWave7, setProjectilesWave7] = useState<IProjectile[]>([]);
  const [projectilesWave8, setProjectilesWave8] = useState<IProjectile[]>([]);
  const [projectilesWave9, setProjectilesWave9] = useState<IProjectile[]>([]);
  const playerRef = useRef<any>(null);

  // useEffect(() => {
  //   setProjectilesWave1(generateProjectiles(10, 0));
  //   setProjectilesWave2(generateProjectiles(10, 0));
  //   // setProjectilesWave3(generateProjectiles(50, 0));
  //   // setProjectilesWave4(generateProjectiles(50, 0));
  //   // setProjectilesWave2(generateProjectiles(50, 0));
  //   // setProjectilesWave2(generateProjectiles(50, 0));
  //   // setProjectilesWave2(generateProjectiles(50, 0));
  //   // setProjectilesWave2(generateProjectiles(50, 0));
  //   // setProjectilesWave3(generateProjectiles(50, 5000));
  // }, []);

  const cevaceva = () => {
    setProjectilesWave1(generateProjectiles(1, 0));
    setProjectilesWave2(generateProjectiles(1, 1000));
    setProjectilesWave3(generateProjectiles(1, 2000));
    setProjectilesWave4(generateProjectiles(1, 3000));
    setProjectilesWave5(generateProjectiles(1, 4000));
    setProjectilesWave6(generateProjectiles(1, 5000));
    setProjectilesWave7(generateProjectiles(1, 6000));
    setProjectilesWave8(generateProjectiles(1, 7000));
    setProjectilesWave9(generateProjectiles(1, 8000));
  };

  useEffect(() => {
    // 2 secunde - fast
    // 4 secunde - normal - 12000
    // 6 secunde - easy
    cevaceva();
    setInterval(() => {
      // setTimeout(() => {}, []);
      cevaceva();
      // const newProjectile = generateProjectiles(1, 0)[0];
      // setProjectilesWave1([])
    }, 12000);
  }, []);

  // useEffect(() => {
  //   //   // setInterval(() => {
  //   //   //   setProjectilesWave1(generateProjectiles(8));
  //   //   // }, 19800);
  //   setInterval(() => {
  //     setProjectilesWave1(generateProjectiles(8, 0));
  //   }, 14000);
  //   setInterval(() => {
  //     setProjectilesWave2(generateProjectiles(8, 2500));
  //   }, 24000);
  // }, [projectilesWave1, projectilesWave2]);

  

  function isCollide(a: any, b: any) {
    return !(
      a.y + a.height < b.y ||
      a.y > b.y + b.height ||
      a.x + a.width < b.x ||
      a.x > b.x + b.width
    );
  }

  const handleCollision = (projectileRef: any) => {
    if (projectileRef.current && playerRef.current) {
      console.log(
        isCollide(
          projectileRef.current.getBoundingClientRect(),
          playerRef.current.getBoundingClientRect()
        )
      );
    }
  };
    //Jocul se desfasoara aici
    return (
      <div >
        <Player ref={playerRef} player={{ life: 100, items: [] }} />
        {/* {projectilesWave1 &&
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
        {projectilesWave3 &&
          projectilesWave3.map((projectile) => (
            <Projectile
              spawnAfter={projectile.spawnAfter}
              speed={projectile.speed}
              positionY={projectile.positionY}
              type={projectile.type}
              key={Math.random()}
              handleCollision={handleCollision}
            />
          ))}
        {projectilesWave4 &&
          projectilesWave4.map((projectile) => (
            <Projectile
              spawnAfter={projectile.spawnAfter}
              speed={projectile.speed}
              positionY={projectile.positionY}
              type={projectile.type}
              key={Math.random()}
              handleCollision={handleCollision}
            />
          ))}
        {projectilesWave5 &&
          projectilesWave5.map((projectile) => (
            <Projectile
              spawnAfter={projectile.spawnAfter}
              speed={projectile.speed}
              positionY={projectile.positionY}
              type={projectile.type}
              key={Math.random()}
              handleCollision={handleCollision}
            />
          ))}
        {projectilesWave6 &&
          projectilesWave6.map((projectile) => (
            <Projectile
              spawnAfter={projectile.spawnAfter}
              speed={projectile.speed}
              positionY={projectile.positionY}
              type={projectile.type}
              key={Math.random()}
              handleCollision={handleCollision}
            />
          ))}
        {projectilesWave7 &&
          projectilesWave7.map((projectile) => (
            <Projectile
              spawnAfter={projectile.spawnAfter}
              speed={projectile.speed}
              positionY={projectile.positionY}
              type={projectile.type}
              key={Math.random()}
              handleCollision={handleCollision}
            />
          ))}
        {projectilesWave8 &&
          projectilesWave8.map((projectile) => (
            <Projectile
              spawnAfter={projectile.spawnAfter}
              speed={projectile.speed}
              positionY={projectile.positionY}
              type={projectile.type}
              key={Math.random()}
              handleCollision={handleCollision}
            />
          ))}
        {projectilesWave9 &&
          projectilesWave9.map((projectile) => (
            <Projectile
              spawnAfter={projectile.spawnAfter}
              speed={projectile.speed}
              positionY={projectile.positionY}
              type={projectile.type}
              key={Math.random()}
              handleCollision={handleCollision}
            />
          ))} */}
      </div>
    );
  
});

export default Game;
