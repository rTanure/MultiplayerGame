import canvasSettings from "../../data/canvasSettings"

class DrawLine{

    public full(data: any) {
        console.log(data)
        let coords = data.data.coords
        let color = data.data.color
        const context = canvasSettings.get().context
        if(!context) {
            return
        }
        this.start(coords[0].x,coords[0].y,context, color)
        for(let c = 0; c < coords.length - 1; c++) {
            this.middle(coords[c].x, coords[c].y, context)
        }
        this.finish(context)
        
    }

    public start(x: number, y:number, contextRef: React.MutableRefObject<CanvasRenderingContext2D | null>, color: string) {
        if(contextRef.current) {
            contextRef.current.strokeStyle = color
        }
        contextRef.current?.beginPath()
        contextRef.current?.moveTo(x, y)
    }

    public middle(x: number, y: number, contextRef: React.MutableRefObject<CanvasRenderingContext2D | null>) {
        contextRef.current?.lineTo(x, y)
        contextRef.current?.stroke()
    }

    public finish(contextRef: React.MutableRefObject<CanvasRenderingContext2D | null>) {
        contextRef.current?.closePath()
    }
    
    
}

export const drawLine = new DrawLine()