import { EventData } from "../../types/types"
import canvasSettings from "../../data/canvasSettings"


function getTouchCoord(eventData: EventData) {

    console.log(eventData.touches)

    if(!eventData.target) {return}
    if(!eventData.touches) {return}

    const canvasPositionX = eventData.target.getBoundingClientRect().x
    const canvasPositionY = eventData.target.getBoundingClientRect().y

    const touchX = eventData.touches[0].clientX
    const touchY = eventData.touches[0].clientY

    const finalCoords = {
        x: (touchX - canvasPositionX) * canvasSettings.get().scale.x,
        y: (touchY - canvasPositionY) * canvasSettings.get().scale.y
    }

    return  {
        x: finalCoords.x,
        y: finalCoords.y
    }
}

export default getTouchCoord