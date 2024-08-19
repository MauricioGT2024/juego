import { useState, useContext } from "react"
import "./Card.css"
import { Contexto1 } from "../App"

export function Card({ src }) {

    const [DadoVuelta, setDadoVuelta] = useContext(Contexto1)
   

    const [mostrar, setMostrar] = useState(false)

    const handleClick = () => {
        if (src == DadoVuelta){
            alert("ganaste")
        }else if(DadoVuelta == null){
            setDadoVuelta(src)
        }else {
           alert("te equivocaste")
           setDadoVuelta(null)
           
        }
        
        setMostrar(!mostrar)
        setDadoVuelta(src)
    }

    return (
        <div className="card-memotest" data-show={mostrar} onClick={handleClick}>
            <img src={src} alt="imagen no encontrado" />
        </div>
    )
}