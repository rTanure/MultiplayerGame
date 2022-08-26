function drawLineFinish(contextRef: React.MutableRefObject<CanvasRenderingContext2D | null>) {
    contextRef.current?.closePath()
}

export default drawLineFinish