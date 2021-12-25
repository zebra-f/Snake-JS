const GRID_SIZE = 41;

export const randomGridPosition = () => {
    return {
        x: Math.floor(Math.random() * GRID_SIZE) + 1,
        y: Math.floor(Math.random() * GRID_SIZE) + 1,
    }
}

export const getGridSize = () => {
    return GRID_SIZE
}