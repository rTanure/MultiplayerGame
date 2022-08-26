import canvasSettings from "../../data/canvasSettings"

function setCanvasSettings(canvas:HTMLCanvasElement) {
    // Real Size
    
    let realSizeX = canvas.getBoundingClientRect().width
    let realSizeZ = canvas.getBoundingClientRect().height

    canvasSettings.setRealSize(realSizeX, realSizeZ)

    // Scale
    let scaleX = canvasSettings.get().size / canvasSettings.get().realSize.x
    let scaleY = canvasSettings.get().size / canvasSettings.get().realSize.y

    canvasSettings.setScale(scaleX, scaleY)
}

export default setCanvasSettings