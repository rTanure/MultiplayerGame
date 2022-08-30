import { CanvasSettings } from '../types/types'

let canvasSettings: CanvasSettings = {
    "size": 2000,
    "realSize": {
        "x": 0,
        "y": 0
    },
    "scale": {
        "x": 0,
        "y": 0
    },
    "lineColor": "#ffffff",
    "lineWidth": 15,
    "backgroundColor": "#d4d4d4",
    "context": undefined
}

function setColor(color: string) {
    canvasSettings.lineColor = color
}

function setScale(x: number, y:number) {
    canvasSettings.scale.x = x
    canvasSettings.scale.y = y
}
 
function setRealSize(x:number, y:number) {
    canvasSettings.realSize.x = x
    canvasSettings.realSize.y = y
}

function setContext(newContext: React.MutableRefObject<CanvasRenderingContext2D | null>) {
    canvasSettings.context = newContext
}

function get() {
    return canvasSettings
}

export default {get, setRealSize, setScale, setColor, setContext}