import { useState } from "react"
import "./show.modules.css"

export function Show(props) {
    function div() {
        setResultado(valor1 / valor2)
    }
    function mult() {
        setResultado(valor1 * valor2)
    }
    function subt() {
        setResultado(valor1 - valor2)
    }
    function somar() {
        setResultado(valor1 + valor2)
    }
    const [resultado, setResultado] = useState()
    const [valor1, setValor1] = useState(0)
    const [valor2, setValor2] = useState(0)
    return (
        <div >
            <div className={"resultado"}>
                <p>{resultado}</p>
            </div>
                <label>
                    <input type="number" onChange={(e) => setValor1(Number(e.target.value))} ></input>
                    <br></br>
                    <input type="number" onChange={(e) => setValor2(Number(e.target.value))}></input>
                    <br></br>
                    <button onClick={() => (somar())}>Somar</button>
                    <button onClick={() => (subt())}>Subtrair</button>
                    <button onClick={() => (mult())}>Multiplicar</button>
                    <button onClick={() => (div())}>Dividir</button>
                </label>
        </div>
    )

}