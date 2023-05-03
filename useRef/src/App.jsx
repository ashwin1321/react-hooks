import { useEffect, useState, useRef } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // basic use case
  const [x, setX] = useState(0)
  const renderCount = useRef(0)      // ref le reupdate didaina if component changes 
  // has a single property called current. here current is 0

  // useEffect(() => {
  //   setX(x + 1)
  // })                            // yo code le infinite loop ma adkincha

  useEffect(() => {
    renderCount.current = renderCount.current + 1         // harek choti render vayo vani renderCount.current ko value 1 increment garne
  })

  // more popular to refer to a DOM element
  const inputRef = useRef(null)     // useRef le DOM element lai refer garna milxa
  const [name, setName] = useState('')
  const prevName = useRef('')       // useRef le DOM element lai refer garna milxa

  const reff = (e) => {
    inputRef.current.focus()        // focus() le input field ma focus garcha
    console.log(inputRef.current.value)    // value le input field ma bhako value dinxa
    inputRef.current.value = "hello"       // input field ma hello dinxa
  }


  return (
    <div className="App">

      <div className="card">
        <input ref={inputRef} type="text" value={name} onChange={e => setName(e.target.value)} />   {/*refer to this particular part */} <br /> <br />
        <p>My name is {name}</p>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        &emsp;
        <button onClick={reff}>Ref</button>
        <br /> <br />
        <div>
          rendered {renderCount.current} times        {/* renderCount.current le currnet value dinxa */}  {/* also not a good way to use currnet inside the component */}

        </div>
      </div>

    </div>
  )
}

export default App
