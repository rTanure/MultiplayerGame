function drawLineStart(x: number, y:number, contextRef: React.MutableRefObject<CanvasRenderingContext2D | null>, color: string) {
    if(contextRef.current) {
        contextRef.current.strokeStyle = color
    }
    contextRef.current?.beginPath()
    contextRef.current?.moveTo(x, y)
}

export default drawLineStart