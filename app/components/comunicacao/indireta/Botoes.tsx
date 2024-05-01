
interface BotoesProps{
    funcao: any
}

export default function Botoes(props: BotoesProps) {

   

    return (
        <div className="flex gap-4">
            <button className="botao-padrao" onClick={() => props.funcao('Maria')}>Maria</button>
            <button className="botao-padrao" onClick={() => props.funcao('Ana')}>Ana</button>
            <button className="botao-padrao" onClick={() => props.funcao('Bia')}>Bia</button>
        </div>
        
        
    )
}