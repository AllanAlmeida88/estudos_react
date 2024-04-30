import Header from "./Cabecalho"
import Content from "./Conteudo"
import Footer from "./Rodape"
import AreaLateral from './AreaLateral'

interface PaginaProps {
    titulo: string,
    subtitulo: string
    children: any
    className?: string
}

export default function Pagina(props: PaginaProps) {
    const ano = new Date().getFullYear()
    return (
        <div className={`
            flex h-screen
        `}>
           <AreaLateral className="h-16" />
            
            <div className={`
                flex flex-col flex-1
            `}>
                <Header className="h-16" titulo={props.titulo} subtitulo={props.subtitulo} />
                <Content className="">
                    {props.children}
                </Content>
                <Footer textoL="Desenvolvido" textoR={`Desenvolvido ${ano}`}  />
           </div>
        </div>
    )
}