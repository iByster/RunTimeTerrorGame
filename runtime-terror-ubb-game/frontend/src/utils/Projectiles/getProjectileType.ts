export const getProjectileType = () => {
    const types = ['controller', 'fail', 'glob', 'no-money', 'ceas'] as const;

    return types[Math.floor(Math.random() * 5)];
}