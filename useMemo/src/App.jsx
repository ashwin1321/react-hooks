import React, { useState, useMemo } from 'react'


function App() {
  const [number, setNumber] = useState(0)
  const [dark, setDark] = useState(false)

  // const doubleNumber = slowFunction(number)

  // useMemo hook is used to memoize the value of a function so that it is not called everytime the component rerenders. so we can use it here to memoize the value of doubleNumber so that it is not called everytime the component rerenders

  const doubleNumber = useMemo(() => {
    return slowFunction(number)
  }, [number])    // number is the dependency array. so doubleNumber will be called only when number changes


  // const themeStyles = {
  //   backgroundColor: dark ? 'black' : 'white',
  //   color: dark ? 'white' : 'black'
  // }
  // yei themeStyles lai normally use garyo bhane harek rerender ma yesko chuttai reference banxa so themeStyles ko value change bhayena bhane rerender huna parxa. so useMemo hook use garyo bhane themeStyles ko value memoize huncha so themeStyles ko value change bhayena bhane rerender huna pardaina unless dark ko value change bhayo bhane

  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? 'black' : 'white',
      color: dark ? 'white' : 'black'
    }
  }, [dark])    // dark is the dependency array. so themeStyles will be called only when dark changes

  // This function is slow and will block the UI from updating
  function slowFunction(num) {
    console.log('Calling Slow Function')
    for (let i = 0; i <= 1000000000; i++) { }
    return num * 2
  }

  // yo function harek state update bhayera component rerender huda slowFunction lai call garxa so yo program ma theme switch garda slowFunction lai call garna parxa tei bhayera theme switch garda UI freeze huncha

  return (
    <div>
      <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} />
      <button onClick={() => setDark(prevDark => !prevDark)}>Change Theme</button>
      <div style={themeStyles}>{doubleNumber}</div>
    </div>
  )
}

export default App
