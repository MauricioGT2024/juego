import { Card } from "../Card/Card"
import "./Grid.css"
import data from "../db.json"
import "../funciones/shuffle"
import { shuffle } from "../funciones/shuffle"


export function Grid() {
    const crearMazoMezclado = () => {
        let a = shuffle(data.concat(data))
        return a

    }

    const mazo = crearMazoMezclado()

    return (
        <div className="grid-memotest">
            {
                mazo.map((directorio, i) => {
                    return <Card key={i} src={directorio} />
                })

            }
        </div>
    )
}