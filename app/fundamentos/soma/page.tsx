import Pagina from "@/app/components/Pagina"

export default function page() {
    const soma = 2 + 8
    return (

        <Pagina titulo="Pagina de fundamentos" subtitulo="Estudos">
            <div>
                Soma
                <br />
                {soma}
            </div>
        </Pagina>
        
    )
}