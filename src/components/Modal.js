import React from 'react'

export default function Modal({ isCorrect, solution, turn }) {

  function finish () {
    window.location.reload()
  }

  return (
    <div className="modal">
      {isCorrect && (
        <div>
          <h1>You Win!</h1>
          <p className="solution">{solution}</p>
          <p>You found the solution in {turn} {turn>1 ? "guesses" : "geuss" }</p>
          <button className="finish"onClick={finish}>Get a new word</button>
        </div>
      )}
      {!isCorrect && (
        <div>
          <h1>Nevermind</h1>
          <p className="solution">{solution}</p>
          <p>Better luck next time :)</p>
          <button className="finish"onClick={finish}>Get a new word</button>
        </div>
      )}
    </div>
  )
}