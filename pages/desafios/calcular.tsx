import { useState } from "react";
import Pagina from "../../app/components/Pagina";

export default function Calcular() {

    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)

    function soma(num1, num2) {
        return num1 + num2;
    }

    function subtracao(num1, num2) {
        return num1 - num2;
    }

    function multiplicacao(num1, num2) {
        return num1 * num2;
    }

    function divisao(num1, num2) {
        if(num1 == 0 || num2 == 0) {
            return 0
        }

        return num1 / num2;
    }

    return (
        <Pagina titulo="Estados" subtitulo="Calculando usando estados">
            <div className="flex flex-col w-full h-full justify-center items-center">
                <div className="flex gap-7 my-24">
                    <input className="field" type="number" name="valor1" id="valor1" onChange={e => setNum1(+e.target.value)} />
                    <input className="field" type="number" name="valor2" id="valor2" onChange={e => setNum2(+e.target.value)} />
                </div>

                <div className="flex flex-col">
                    <span>Resultados </span>
                    <span>Soma:             {soma(num1, num2)}</span>
                    <span>Subtração:        {subtracao(num1, num2)}</span>
                    <span>Multiplicação:    {multiplicacao(num1, num2)}</span>
                    <span>Divisão:          {divisao(num1, num2)}</span>
                </div>
                {/* <button onClick={soma(num1, num2)}>Calcular</button> */}
            </div>
        </Pagina>
    )
}