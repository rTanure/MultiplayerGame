import { useEffect, useState } from "react"

import canvasSettings from "../../data/canvasSettings"

export default function ColorPicker() {
    const [newColor, setNewColor] = useState(canvasSettings.get().lineColor)

    useEffect(()=> {
        canvasSettings.setColor(newColor)
    }, [newColor])

    return (
        <input type="color" value={canvasSettings.get().lineColor} onChange={(evt) => setNewColor(evt.target.value)}/>
    )
}