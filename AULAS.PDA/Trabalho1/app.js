const {produtos} = require("./model/dados")
const moment = require("moment")


const data = moment().format("DD/MM/YYYY", "hh:mm")
console.log("-------------------- JHON -- GALERIA DO ROCK ---------------- " + data + "--------------")


for(let i = 0 ; i < produtos.length ; i++){
   if(produtos[i].preco > 100 ){
        console.log("você trabalhou muito e pode comprar, o valor é " ,  produtos[i].preco * produtos[i].qtd)
    } else {
        console.log("Seu nome é ", produtos[i].nomeCliente , "Você está dura e você não consegue comprar")
    }
}