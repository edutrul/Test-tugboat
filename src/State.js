import {useState} from "react";
export function Prueba() {
    const [sumar, setSumar] = useState(0);
    console.log(sumar);
    return <>
    <button onClick={() => setSumar(sumar +1)}>Boton</button>
    <p>{sumar}</p>
    </>
}