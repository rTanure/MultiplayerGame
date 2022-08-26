import canvasSettings from "../../data/canvasSettings"

function configureContext(ctx: CanvasRenderingContext2D) {
    ctx.lineCap = "round"
    ctx.strokeStyle = canvasSettings.get().lineColor
    ctx.lineWidth = canvasSettings.get().lineWidth
}

export default configureContext