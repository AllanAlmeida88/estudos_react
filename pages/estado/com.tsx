import { useState } from "react";
import Pagina from "../../app/components/Pagina";

export default function PaginaComEstado() {

    const [numero, setNumero] = useState(0)
    function incrementar() {
        setNumero(numero + 1)
    }
    return (
        <Pagina titulo="Estados" subtitulo="Componenet com estado">
            <div className="flex flex-col">
                <span>Valor: {numero}</span>
                <button className="botao-padrao" onClick={incrementar}>Incrementar</button>
            </div>
        </Pagina>
    )
}