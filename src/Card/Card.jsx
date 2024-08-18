import "./Card.css"

export function Card({ src }){
    return(
        <>
             <img className="card-memotest" src={src} alt="imagen no encontrado" />
        </>
    )
}