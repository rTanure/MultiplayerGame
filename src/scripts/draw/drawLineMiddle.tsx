function drawLineMiddle(x: number, y: number, contextRef: React.MutableRefObject<CanvasRenderingContext2D | null>) {
    contextRef.current?.lineTo(x, y)
    contextRef.current?.stroke()
}

export default drawLineMiddle