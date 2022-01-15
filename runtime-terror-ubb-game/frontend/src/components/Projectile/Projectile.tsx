import React, { useEffect, useState, createRef } from 'react';
import './Projectile.css';

export interface IProjectile {
  positionY: string;
  spawnAfter: number;
  speed: 'easy' | 'normal' | 'fast';
  type: 'controller' | 'no-money' | 'ceas' | 'glob' | 'fail';
  handleCollision?(ref: any): void;
}

export const Projectile: React.FC<IProjectile> = ({
  positionY,
  spawnAfter,
  speed,
  type,
  handleCollision,
}) => {
  const [projectileAnimation, setProjectileAnimation] = useState<string>('');

  const pjRef = createRef<any>();
  const constructSpeedClass = () => {
    return `projectile-spawn-${speed}`;
  };

  useEffect(() => {
    spawnProjectile();
  }, []);

  const spawnProjectile = () => {
    setTimeout(() => {
      setProjectileAnimation(constructSpeedClass());
    }, spawnAfter);
  };

  setInterval(() => {
    if (handleCollision) {
      handleCollision(pjRef);
    }
  }, 500);

  return projectileAnimation ? (
    <div
      ref={pjRef}
      className={`projectile ${projectileAnimation} ${type}`}
      style={{ left: positionY }}
    ></div>
  ) : <></>;
};
