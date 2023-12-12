function trocarConteudo(param) {
    
    var conteudo = document.getElementById("conteudo");
    var botao;
    var verify;

    if (conteudo && param === 1) {

        if(verify!==1){
            var botao = document.getElementById("meus-contatos-button");
            botao.classList.remove("btn-ativo-cabecalho");
            botao.classList.add("btn-cabecalho");

            var botao = document.getElementById("enviar-email-button");
            botao.classList.remove("btn-ativo-cabecalho");
            botao.classList.add("btn-cabecalho");
        }
        var verify = 1
        if(botao.click){
            var botao = document.getElementById("meus-servicos-button");
            botao.classList.remove("btn-cabecalho");
            botao.classList.add("btn-ativo-cabecalho");
        }

        conteudo.innerHTML = "<ul><li id='serv-1'>CentralPS: Prestação de serviços</li></ul>";
    }
    if (conteudo && param === 2) {//contatos
        
        if(verify!==2){
            var botao = document.getElementById("meus-servicos-button");
            botao.classList.remove("btn-ativo-cabecalho");
            botao.classList.add("btn-cabecalho");

            var botao = document.getElementById("enviar-email-button");
            botao.classList.remove("btn-ativo-cabecalho");
            botao.classList.add("btn-cabecalho");
        }
        var verify = 2
        if(botao.click){
            
            var botao = document.getElementById("meus-contatos-button");
            botao.classList.remove("btn-cabecalho");
            botao.classList.add("btn-ativo-cabecalho");
        }

        conteudo.innerHTML = "<ul><li id='serv-1'>Contatos aqui</li></ul>";
    }
    if (conteudo && param === 3) {
        if(verify!==3){
            var botao = document.getElementById("meus-servicos-button");
            botao.classList.remove("btn-ativo-cabecalho");
            botao.classList.add("btn-cabecalho");

            var botao = document.getElementById("meus-contatos-button");
            botao.classList.remove("btn-ativo-cabecalho");
            botao.classList.add("btn-cabecalho");
        }
        var verify = 3
        if(botao.click){
            var botao = document.getElementById("enviar-email-button");
            botao.classList.remove("btn-cabecalho");
            botao.classList.add("btn-ativo-cabecalho");
        }

        conteudo.innerHTML = "<div><h1>Envie seu email</h1><p>Digite aqui seu email e eu entrarei em contato:</p><input type='email' placeholder='seuemail@exemplo.com'><br><button>Enviar</button></div>";
    }
    console.log(verify)
}