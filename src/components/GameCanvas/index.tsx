import './style.css'

import { useEffect, useRef, useState } from 'react'

// Import Types
import { Event, EventData, Coord } from '../../types/types'

import canvasSettings from '../../data/canvasSettings'

import setCanvasSettings from '../../scripts/settings/setCanvasSettings'
import configureCanvas from '../../scripts/settings/configureCanvas'
import configureContext from '../../scripts/settings/configureContext'

import getMouseCoord from '../../scripts/control/getMouseCoord'
import getTouchCoord from '../../scripts/control/getTouchCoord'
import checkEvent from '../../scripts/control/checkEvent'

import drawLineStart from '../../scripts/draw/drawLineStart'
import drawLineMiddle from '../../scripts/draw/drawLineMiddle'
import drawLineFinish from '../../scripts/draw/drawLineFinish'

import appendVolatileData from '../../scripts/data/appendVolatileData'
import resetVolatileData from '../../scripts/data/resetVolatileData'
import saveDrawingData from '../../scripts/data/saveDrawingData'

export default function GameCanvas() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null)
    const contextRef = useRef<CanvasRenderingContext2D | null>(null)

    const [isDrawing, setIsDrawing] = useState<boolean>(false)

    useEffect(()=>{
        // get Canvas
        const canvas = canvasRef.current
        if (!canvas) return

        // get Context
        const ctx = canvas.getContext('2d')
        if (!ctx) return 
        contextRef.current = ctx

        //setCanvasSettings - canvas
        setCanvasSettings(canvas)
        configureCanvas(canvas) 
        configureContext(ctx)

    }, [
        // window.innerHeight, 
        // window.innerWidth
    ])

    const startDrawing = (evt: Event) => { 
        const eventData: EventData = evt.nativeEvent

        let eventCoord: Coord | undefined

        if(eventData.touches) {
            eventCoord = getTouchCoord(eventData)
        } else {
            eventCoord = getMouseCoord(eventData)
        }

        if(!eventCoord) {return}

        drawLineStart(eventCoord.x, eventCoord.y, contextRef, canvasSettings.get().lineColor)
        setIsDrawing(true)
    }

    const draw = (evt: Event) => {
        if(!isDrawing) { return }

        const eventData: EventData = evt.nativeEvent

        if(!contextRef.current) {return} 
        
        let eventCoord: Coord | undefined

        if(eventData.touches) {
            eventCoord = getTouchCoord(eventData)
        } else {
            eventCoord = getMouseCoord(eventData)
        }

            if(!eventCoord) {return}

        drawLineMiddle(eventCoord.x, eventCoord.y, contextRef)
        appendVolatileData(eventCoord. x, eventCoord.y)
    }

    const finishDrawing = () => {
        setIsDrawing(false)

        drawLineFinish(contextRef)

        saveDrawingData()
        resetVolatileData()
    }

    return (
        <canvas 
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={finishDrawing}

            onTouchStart={startDrawing}
            onTouchMove={draw}
            onTouchEnd={finishDrawing}
            
            onMouseLeave={finishDrawing}

            ref={canvasRef}
        />
    )
}
