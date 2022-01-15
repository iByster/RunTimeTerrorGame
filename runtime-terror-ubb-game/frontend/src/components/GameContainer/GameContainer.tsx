import { Box, Container } from '@mui/material';
import React, {
  createContext,
  RefObject,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useParams } from 'react-router-dom';
import { generateProjectiles } from '../../utils/Projectiles/generateProjectiles';
import Game from '../game/Game';
import { IProjectile, Projectile } from '../Projectile/Projectile';
import './GameContainer.css';

interface GameContainerProps {}

interface PlayerContextInterface {
  playerRef: any;
}

export const PlayerContext = createContext<PlayerContextInterface>(
  {} as PlayerContextInterface
);

export function usePlayerContext() {
  return useContext(PlayerContext);
}

export const GameContainer: React.FC<GameContainerProps> = () => {
  const [playerRef, setPlayerRef] = useState<React.MutableRefObject<any>>();
  // const [playerRefState, setPlayerRefState] = useState<any>(playerRef);
  const [timeUntilGameStart, setTimeUntilGameStart] = useState(3);
  const [projectilesWave1, setProjectilesWave1] = useState<IProjectile[]>([]);
  const [projectilesWave2, setProjectilesWave2] = useState<IProjectile[]>([]);
  const [projectilesWave3, setProjectilesWave3] = useState<IProjectile[]>([]);
  const [projectilesWave4, setProjectilesWave4] = useState<IProjectile[]>([]);
  const [projectilesWave5, setProjectilesWave5] = useState<IProjectile[]>([]);
  const [projectilesWave6, setProjectilesWave6] = useState<IProjectile[]>([]);
  const [projectilesWave7, setProjectilesWave7] = useState<IProjectile[]>([]);
  const [projectilesWave8, setProjectilesWave8] = useState<IProjectile[]>([]);
  const [projectilesWave9, setProjectilesWave9] = useState<IProjectile[]>([]);
  const gameRef = useRef<any>(null);

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

  function isCollide(a: any, b: any) {
    return !(
      a.y + a.height < b.y ||
      a.y > b.y + b.height ||
      a.x + a.width < b.x ||
      a.x > b.x + b.width
    );
  }

  const getPlayerRef = (playerRef: any) => {
    // console.log(playerRef);
    if (playerRef) {
      setPlayerRef(playerRef);
    }
  };

  const handleCollision = (projectileRef: any) => {
    if (playerRef) {
      if (projectileRef.current && playerRef.current) {
        if (
          isCollide(
            projectileRef.current.getBoundingClientRect(),
            playerRef.current.getBoundingClientRect()
          )
        ) {
          console.log('hit');
          gameRef.current.damageTaken();
        }
      }
    } else {
      console.log('no player ref');
    }
  };

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

  if (timeUntilGameStart === 0) {
    return (
      <Container>
        <PlayerContext.Provider value={{ playerRef: getPlayerRef }}>
          <Game ref={gameRef} />
        </PlayerContext.Provider>
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
          ))}
      </Container>
    );
  } else {
    return (
      <div
        className={'container'}
        style={{ height: window.innerHeight, width: window.innerWidth }}
        id={'countdown'}
      >
        <h1 id={'countdownText'}>{timeUntilGameStart}</h1>
      </div>
    );
  }
};
