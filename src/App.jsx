import { useState } from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <ItemListContainer greeting="¡Bienvenido a LionTi Shop!" /> 

    </>
  )
}

export default App
