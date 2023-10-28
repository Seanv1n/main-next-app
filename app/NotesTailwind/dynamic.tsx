"use client"
import React, { useState } from 'react'

const Dynamic = () => {
    const colors = ["red", "green", "blue"];
    const [color, setColor] = useState("red");
    const possible = ["bg-red-400", "bg-green-400", "bg-blue-400"]
    return (
        <select
            className={`bg-${color}-400`}
            value={color}
            onChange={(e) => setColor(e.target.value)}
        >
            <option value="">choose</option>
            {colors.map((color) => {
                return <option value={color}>{color}</option>
            })}
        </select>
    )
}

export default Dynamic