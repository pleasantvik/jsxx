// IMport react and Reactdom from libraries
import React from 'react'
import ReactDOM from 'react-dom'

// Create React component
const App = function () {
  const buttonText = { text: 'click me' }
  return (
    <div>
      <label className="label" htmlFor="name">
        Enter Age:
      </label>
      <input id="name" type="text"></input>
      <button style={{ backgroundColor: 'blue', color: 'white' }}>
        {buttonText.text}
      </button>
    </div>
  )
}

// Take the react component and show on screen
ReactDOM.render(<App />, document.querySelector('#root'))
