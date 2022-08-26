import { EventData } from "../../types/types"

function checkEvent(eventData: EventData) {
    if (eventData.offsetX || eventData.offsetY) {
        return true
    } else {
        return false
    }
}

export default checkEvent