type Event = {
    nativeEvent: object
}

type EventData = {
    offsetX?: number
    offsetY?: number
    touches?: {
        clientX: number
        clientY: number
    }[]
    target?: {
        getBoundingClientRect(): {
            x: number
            y: number
        }
    }
}

type Coord = {
    x: number,
    y: number
}

type DrawingData = {
    color:string
    coords: object[]
}

type CanvasSettings = {
    size: number
    realSize: Coord
    scale: Coord
    lineColor: string
    lineWidth: number,
    backgroundColor: string
}

export type {
    Event, 
    EventData,
    Coord, 
    DrawingData, 
    CanvasSettings
}