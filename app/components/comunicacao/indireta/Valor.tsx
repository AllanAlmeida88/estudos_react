
import { useState } from "react";
import Botoes from "./Botoes";

interface ValorProps {
    texto: any
}
export default function Valor(props) {

    const [nome, setNome] = useState("Tes")


    return (
        <div className="flex flex-col items-center gap-4">
            <span className="text-8xl font-black">{nome}</span>
            <Botoes funcao={setNome} />
        </div>
        
         // <div>
        //     <div className="flex gap-5 justify-center">
        //         <button onClick={() => setNome('Maria')} className="botao-padrao">Maria</button>
        //         <button onClick={() => setNome('Ana')} className="botao-padrao">Ana</button>
        //         <button onClick={() => setNome('Carla')} className="botao-padrao">Carla</button>
        //     </div>
        // </div>
        
    )
}