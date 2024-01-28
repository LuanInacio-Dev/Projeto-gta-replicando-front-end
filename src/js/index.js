 const botao = document.querySelector(".btn-plataforma")//Pro querySelector a classe fica .nomedaclass
const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas")

botao.addEventListener('click',() => {
   //elementoPlataformas.classList.add("ativo")
   const botaoEstaAberto = elementoPlataformas.classList.contains("ativo")
   elementoPlataformas.classList.toggle("ativo")//if  else pra ativar e desativar
  

   })
   
  /* if (botaoEstaAberto) {//representação de todas as clas,o contens verifica as classes ativas
    elementoPlataformas.classList.remove("ativo")
   }else{
    elementoPlataformas.classList.add("ativo")
   }*/
