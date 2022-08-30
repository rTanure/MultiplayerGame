import { drawLine } from "./drawLine"

class DrawCanvas {
    public initial(data: {}[]) {
        const size = data.length
        for(let count = 0; count <= size -1 ; count++){
            drawLine.full(data[count])
        }
    }
}

export const drawCanvas = new DrawCanvas()