import volatileData from "../../data/VolatileData"

function appendCoordToAtualData(x: number, y: number) {
    volatileData.append(x, y)
}

export default appendCoordToAtualData