import './style.css'

import GameCanvas from '../../components/GameCanvas'
import ColorPicker from '../../components/ColorPicker'
import React from 'react'


export default function Home() {
    return (
        <section>
            <GameCanvas />
            <ColorPicker />
        </section>
    )
}