let drawingData: object[] = []

function append(color: string, data: object[]) {
    let newObject = {
        "color": color,
        "data": data
    }

    drawingData.push(newObject)
}

function get() {
    return drawingData
}

export default { append, get }