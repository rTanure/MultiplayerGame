import { EventData } from "../../types/types"
import canvasSettings from "../../data/canvasSettings"

function getMouseCoord(eventData: EventData) {
    const evt: EventData = eventData
    if(!evt.offsetX || !evt.offsetY) {
        return { 
            "x": 0, 
            "y": 0
        }
    }

    let x: number = evt.offsetX * canvasSettings.get().scale.x
    let y: number = evt.offsetY * canvasSettings.get().scale.y

    return {
        x, 
        y
    }
}

export default getMouseCoord