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

import { drawLine } from '../../scripts/draw/drawLine'
import { drawCanvas } from '../../scripts/draw/drawCanvas'

import appendVolatileData from '../../scripts/data/appendVolatileData'
import resetVolatileData from '../../scripts/data/resetVolatileData'
import saveDrawingData from '../../scripts/data/saveDrawingData'

import { api } from '../../api/functions'
import VolatileData from '../../data/VolatileData'
import drawingData from '../../data/drawingData'

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

        canvasSettings.setContext(contextRef)

        api.getData(drawCanvas.initial)
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

        drawLine.start(eventCoord.x, eventCoord.y, contextRef, canvasSettings.get().lineColor)
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

        drawLine.middle(eventCoord.x, eventCoord.y, contextRef)
        appendVolatileData(eventCoord. x, eventCoord.y)
    }

    const finishDrawing = () => {
        setIsDrawing(false)

        drawLine.finish(contextRef)

        saveDrawingData()

        api.appendDrawToServer(VolatileData.get(), canvasSettings.get().lineColor)

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
            
            // onMouseLeave={finishDrawing}

            ref={canvasRef}
        />
    )
}
