import React, {Component} from "react";
import Hortifruit from "./Component/hortifruit"
// importando os arquivos do React do Componente de Função

class App extends Component {
// Meu Arquivo App está informando que ele é um Componente de Classe

// state={
// Animefavorito: "Ousama Ranking",
// Jogofavorito: "DARK SOULS™: REMASTERED",
// Pratofavorito: "Strogonoff de Carne"
// }
// O State é um Grande objeto do Componente de Classe que utilizamos para manipular/guardar as informações

//Trocar=()=>{

//}
// Os Parenteses são os parãmetros da nossa função e a Flecha serve como Return e dentro das chaves colocamos a ação pra ser feita
  render() {
// Render vai Renderizar tudo que você escrever na Tela ( ele depende do Return)
    return(
// Return manda Todos os Elementos abaixo dele pra mandar para o Render para fazer a Renderização
    <>
    <Hortifruit/>
    {/* <header></header>
    <main></main>
    <footer></footer>
    <h1>{this.state.Animefavorito}</h1> */}
  {/* {this.state.Animefavorito} Serve para mencionar/chamar algo armazenado dentro do State,
   Sempre que a gente usar Javascript no Html utilizamos as {} */}
    </>
    )
  }
}
export default App
// Export Default é o Responsável por exportar os Arquivos que serão mostrados na Tela