let drawingVolatileData: object[] = []

function get() {
    return drawingVolatileData
}

function append(x:number, y:number) {
    drawingVolatileData.push({
        x: x,
        y: y
    })
}

function clear() {
    drawingVolatileData = []
}

export default {get, append, clear}