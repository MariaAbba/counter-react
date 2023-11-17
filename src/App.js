import './index.scss'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  const onClickPlus = () => {
    setCount(count + 1)
  }

  const onClickMinus = () => {
    setCount(count - 1)
  }

  return (
    <div className="App">
      <div>
        <h2>Counter:</h2>
        <h1>{count}</h1>
        <button onClick={onClickMinus} className="minus">
          - Minus
        </button>
        <button onClick={onClickPlus} className="plus">
          Plus +
        </button>
      </div>
    </div>
  )
}

export default App
