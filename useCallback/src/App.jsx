import { useState, useCallback, useEffect } from 'react'
import './App.css'

function App() {
  const [number, setNumber] = useState(0)
  const [dark, setDark] = useState(false)

  // const getItems = () => {
  //   return [number, number + 1, number + 2]
  // }

  const theme = {
    backgroundColor: dark ? '#333' : '#FFF',
    color: dark ? '#FFF' : '#333'
  }

  // same like useMemo, whenever the component re-render, the function will re-run again and again. 
  // so we use useCallback() to prevent the function re-run again and again unless the dependency changes

  const getItems = useCallback(() => {
    return [number, number + 1, number + 2]
  }, [number])

  useEffect(() => {
    console.log('Theme changed')
  }, [getItems])



  return (
    <div style={theme}>
      <input

        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Toggle theme
      </button>
      <div>{getItems().map((item) => <div key={item}>{item}</div>)}</div>

    </div>
  )
}

export default App
