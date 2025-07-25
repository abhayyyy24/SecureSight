'use client'

import React, { useState, useEffect, useRef } from 'react'
import { FaPlay, FaPause, FaForward, FaBackward } from 'react-icons/fa'

const cameraEvents = [
  { camera: 'Camera - 01' },
  { camera: 'Camera - 02' },
  { camera: 'Camera - 03' },
]

export default function TimelinePlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(3.0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const svgWidth = 2400
  const hourWidth = svgWidth / 24
  const labelWidth = 160
  const rowHeight = 40
  const totalRows = cameraEvents.length
  const totalHeight = rowHeight * (totalRows + 1) 

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentTime(prev => (prev + 0.01 > 24 ? 0 : +(prev + 0.01).toFixed(2)))
      }, 100)
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isPlaying])

  return (
    <div className="bg-black text-white">
      {/* Controls */}
      <div className="flex items-center h-[40px] bg-[#131313] gap-4 mb-3 px-1 py-2 rounded-lg">
        <button onClick={() => setIsPlaying(false)}><FaBackward /></button>
        <button onClick={() => setIsPlaying(p => !p)}>
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
        <button onClick={() => setIsPlaying(false)}><FaForward /></button>
        <div className="ml-4 text-sm">Time: {currentTime.toFixed(2)} hrs</div>
      </div>

      {/* Timeline */}
      <div className="overflow-x-auto bg-[#131313] rounded-lg p-2">
        <svg width={labelWidth + svgWidth} height={totalHeight}>
          {/* Hour markers */}
          {Array.from({ length: 24 }, (_, i) => (
            <g key={i}>
              <line
                x1={labelWidth + i * hourWidth}
                y1={0}
                x2={labelWidth + i * hourWidth}
                y2={totalHeight}
                stroke="#4b5563"
                strokeWidth={1}
              />
              <text
                x={labelWidth + i * hourWidth + 2}
                y={12}
                fill="#d1d5db"
                fontSize="10"
              >
                {i.toString().padStart(2, '0')}:00
              </text>
            </g>
          ))}

          {/* Camera List Header*/}
          <text
            x={0}
            y={rowHeight - 15}
            fill="white"
            fontSize="16"
            fontWeight="bold"
          >
            Camera List
          </text>

          {/* CameraLabels*/}
          {cameraEvents.map((cam, idx) => (
            <text
              key={idx}
              x={0}
              y={rowHeight * (idx + 1) + rowHeight - 15}
              fill="white"
              fontSize="12"
              fontWeight="bold"
              
            >
              {cam.camera}
            </text>
          ))}

          
          <line
            x1={0}
            y1={rowHeight * 2}
            x2={labelWidth + svgWidth}
            y2={rowHeight * 2}
            stroke="#374151"
            strokeWidth={1}
          />
          <line
            x1={0}
            y1={rowHeight * 3}
            x2={labelWidth + svgWidth}
            y2={rowHeight * 3}
            stroke="#374151"
            strokeWidth={1}
          />

          {/*scrubber*/}
          <line
            x1={labelWidth + (currentTime / 24) * svgWidth}
            y1={0}
            x2={labelWidth + (currentTime / 24) * svgWidth}
            y2={totalHeight}
            stroke="yellow"
            strokeWidth={2}
          />
          <text
            x={labelWidth + (currentTime / 24) * svgWidth + 5}
            y={14}
            fill="yellow"
            fontSize="10"
          >
            {currentTime.toFixed(2)}h
          </text>
        </svg>
      </div>
    </div>
  )
}
