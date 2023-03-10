import React, {Component} from "react";
import "../App.css"
import alface from "../Assets/alface.png"
import limao from "../Assets/limao.png"
import cereja from "../Assets/cereja.png"
import tomate from "../Assets/tomate.png"
import manga from "../Assets/manga.png"
import cenoura from "../Assets/cenoura.png"
import beterraba from "../Assets/beterraba.png"
import laranja from "../Assets/laranja.png"

export default class Hortifruit extends Component {
state = {
Legumes: [{
    Fruta:alface
},{
    Fruta:limao
},{
    Fruta:cereja
},{
    Fruta:tomate
},{
    Fruta:manga
},{
    Fruta:cenoura
},{
    Fruta:beterraba
},{
    Fruta:laranja
}]
}

    render(){
    return(
       //o MAP ele é um metodo de Array que passa por cada uma das nossas informações 
       //do nosso Array e exibe essas informações na nossa tela 
       // O "item" é o rastreador do MAP que está trazendo para a gente todas as informações dentro do Array
       //utilizamos o "item" para retornar as informações pra gente 
        <div>
        <h1>HORTIFRUITI</h1>
            {this.state.Legumes.map((item)=>(
         <div>

         <img src={item.Fruta}/> 
          </div>  
            ))} 
        
           
            
            </div>
    )
}
}