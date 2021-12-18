import React, { useEffect, useState } from 'react';
import './Projectile.css';

export interface IProjectile {
  positionY: string;
  spawnAfter: number;
  speed: 'easy' | 'normal' | 'fast';
  type: 'controller' | 'no-money' | 'ceas' | 'glob' | 'fail';
}

export const Projectile: React.FC<IProjectile> = ({
  positionY,
  spawnAfter,
  speed,
  type,
}) => {
  const [projectileAnimation, setProjectileAnimation] = useState<string>('');

  const constructSpeedClass = () => {
    return `projectile-spawn-${speed}`
  }

  useEffect(() => {
    spawnProjectile();
  }, []);

  const spawnProjectile = () => {
    setTimeout(() => {
        setProjectileAnimation(constructSpeedClass());
    }, spawnAfter);
  };

 return <div className={`projectile ${projectileAnimation} ${type}`} style={{ left: positionY }}></div>;
};
