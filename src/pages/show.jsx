import { useState } from "react"
import "./show.modules.css"


export function Show(props) {

    // Exemplo de solicitação POST usando o fetch
const dataToSend = { data: 'Hello, API!' };
async function post() {
    fetch('/pages/api/teste', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
            console.log("TESTE")
        //   console.error('Erro:', error);
        });
}
async function get() {
    fetch('api/teste', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then((response) => response.json())
    
}


    function divisao() {
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
                    <button onClick={() => (divisao())}>Dividir</button>
                    <br></br>
                    <button onClick={() => (get())}>get</button>
                    <button onClick={() => (post())}>post</button>
                </label>
        </div>
    )

}