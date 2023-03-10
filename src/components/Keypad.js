import React, { useEffect, useState } from 'react'
import data from '../db.json'

export default function Keypad({ usedKeys }) {
  const [letters, setLetters] = useState(null)
  // console.log(data)

  useEffect(() => {
        setLetters(data.letters)
  }, [])

  return (
    <div className="keypad">
      {letters && letters.map(l => {
        const color = usedKeys[l.key]
        return (
          <div key={l.key} className={color}>{l.key}</div>
        )
      })}
    </div>
  )
}