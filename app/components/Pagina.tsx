import Header from "./Cabecalho"
import Content from "./Conteudo"
import Menu from "./Menu"
import Footer from "./Rodape"

interface PaginaProps {
    titulo: string,
    subtitulo: string
    children: any
}

export default function Pagina(props: PaginaProps) {
    const ano = new Date().getFullYear()
    return (
        <div className={`
            flex flex p-4 gap-4 h-screen
        `}>
           <Menu />
            
            <div className={`
                flex flex-col flex-1 gap-4
            `}>
                <Header titulo="Testando" subtitulo="Usando interface" className={`
                    flex flex-col justify-center items-center h-24 rounded-lg
                    bg-gradient-to-r from-blue-600 to-zinc-900 
                `} />
                <Content>
                    {props.children}
                </Content>
                <Footer textoL="Desenvolvido" textoR={`Desenvolvido ${ano}`}  />
           </div>
        </div>
    )
}