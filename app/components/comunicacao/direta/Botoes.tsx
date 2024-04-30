import { useState } from "react";
import Valor from "./Valor";

export default function Botoes() {

    const [nome, setNome] = useState("")

    return (
        <div>
            <div className="flex gap-5 justify-center">
                <button onClick={() => setNome('Maria')} className="botao-padrao">Maria</button>
                <button onClick={() => setNome('Ana')} className="botao-padrao">Ana</button>
                <button onClick={() => setNome('Carla')} className="botao-padrao">Carla</button>
            </div>
            <Valor texto={nome} />
        </div>
        
    )
}