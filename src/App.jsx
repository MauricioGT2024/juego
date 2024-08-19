import { Grid } from "./Grid/Grid"
import "./App.css"

import { createContext, useEffect, useState } from "react"

export const Contexto1 = createContext(null)


function App() {

  const [DadoVuelta, setDadoVuelta] = useState(null)

  return (
    <>
      <Contexto1.Provider value={[DadoVuelta, setDadoVuelta]}>
      <div className="centrar">
        <Grid />
      </div>
      </Contexto1.Provider>
    </>
  )
}

export default App
