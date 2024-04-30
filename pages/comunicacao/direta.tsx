import Pagina from '../../app/components/Pagina'
import Botoes from '../../app/components/comunicacao/direta/Botoes'

export default function PaginaDireta() {
    return (
        <Pagina titulo='Comunicação' subtitulo='Comunicação direta'>
            <div className='flex justify-center items-center w-full h-full'>
                <Botoes />
            </div>
        </Pagina>
    )
}