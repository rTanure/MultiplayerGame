import canvasSettings from "../../data/canvasSettings"

function configureCanvas(canvas:HTMLCanvasElement) {
    // Virtual size
    canvas.width = canvasSettings.get().size
    canvas.height = canvasSettings.get().size

    canvas.style.background = canvasSettings.get().backgroundColor
}

export default configureCanvas