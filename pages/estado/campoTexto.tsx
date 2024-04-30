import { useState } from 'react'
import Pagina from '../../app/components/Pagina'
export default function CampoTexto() {

    const [texto, setTexto] = useState('Valor inicial')

    return (
        <Pagina titulo='Estado' subtitulo='Campo de texto'>
            <div className='flex flex-col gap-4 w-full h-full justify-center items-center'>
                <span>Texto: {texto}</span>
                <input type="text" className='field' value={texto} onChange={e => setTexto(e.target.value) }/>
            </div>
        </Pagina>
    )
}