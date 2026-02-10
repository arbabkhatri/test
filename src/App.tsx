import { useState } from 'react'
import './styles.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-container">
      <h1>Norex</h1>
      <p>Welcome to your new project!</p>
      <button onClick={() => setCount(count + 1)}>
          Count: {count}
        </button>
    </div>
  )
}

export default App