import Pagina from "@/app/components/Pagina";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import { useState } from "react";

export default function Teste() {

    const [numero, setNumero] = useState(0)
    const [passo, setPasso] = useState(1)

    function incrementar() {
        setNumero(numero + passo)
    }

    function decrementar() {
        setNumero(numero - passo)
    }

    function aumentarPasso() {
        setPasso(passo + 1)
    }

    function diminuirPasso() {
        setPasso(passo - 1)
    }
   

    return (
        <Pagina titulo="Teste" subtitulo="Teste">
            <div className="flex flex-col items-center h-full w-full justify-center">
                <span className="text-2xl">Valor: {numero}</span>
                <br />
                <div className="flex gap-4">
                    <button className="bg-violet-800 p-4 rounded-lg" onClick={incrementar}><IconPlus /></button>
                    <button className="bg-purple-700 p-4 rounded-lg" onClick={decrementar}><IconMinus /></button>
                </div>

                <div className="flex p-4 flex-col justify-center items-center">
                    <span>Número de passos: {passo}</span>
                    <div className="flex gap-5 pt-5">
                        <button className="bg-violet-800 p-4 rounded-lg" onClick={aumentarPasso}><IconPlus /></button>
                        <button className="bg-purple-700 p-4 rounded-lg" onClick={diminuirPasso}><IconMinus /></button>
                    </div>
                </div>
            </div>
        </Pagina>
    )
}