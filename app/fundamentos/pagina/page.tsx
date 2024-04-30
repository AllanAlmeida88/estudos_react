"use client"
import Pagina from "@/app/components/Pagina";

export default function Page() {

    function executar() {
        console.log('Executando')
    }

    return (
        <Pagina titulo="Pagina de fundamentos" subtitulo="Estudos">
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
            </ul>
        </Pagina>
    )
}