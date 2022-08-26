import canvasSettings from "../../data/canvasSettings"
import VolatileData from "../../data/VolatileData"
import drawingData from "../../data/drawingData"

function saveDrawingData() {
    let lineColor = canvasSettings.get().lineColor
    let volatileData = VolatileData.get()

    drawingData.append(lineColor, volatileData)
}

export default saveDrawingData