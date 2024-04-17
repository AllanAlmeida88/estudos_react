import Header from "./Cabecalho"
import Content from "./Conteudo"
import Menu from "./Menu"
import Footer from "./Rodape"

export default function Pagina(props: any) {
    const ano = new Date().getFullYear()
    return (
        <div className={`
            flex flex-col p-4 gap-4 h-screen
        `}>
           <Header titulo={props.titulo} subtitulo={props.subtitulo}/>
          
            <div className={`
                flex flex-1 gap-4
            `}>
                <Menu />
                <Content>
                    {props.children}
                </Content>
           </div>

          
           <Footer textoL="Desenvolvido" textoR={`Desenvolvido ${ano}`}  />
        </div>
    )
}