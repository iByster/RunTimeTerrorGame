import { IProjectile } from "../../components/Projectile/Projectile"
import { getProjectileType } from "./getProjectileType";

export const generateProjectiles = (count: number, initialDelay: number) => {
    const res: IProjectile[] = [];
    let spawnTime = initialDelay;

    for (let i = 0; i < count; ++i) {
        let projectile: IProjectile = {
            positionY: `${(Math.floor(Math.random() * 7) + 1) * 10 + 4}vw`,
            spawnAfter: spawnTime,
            speed: 'normal',
            type: getProjectileType()
        }
        res.push(projectile);
        spawnTime += 1000;
    }

    return res;
 }