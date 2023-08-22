import { Router} from "express";
const rotaLogin = new Router();
rotaLogin.get('/', (requisicao, resposta) => {
    resposta.redirect("/login.html");   
})
.post('/', (requisicao, resposta) => {
    const usuario = requisicao.body.usuario;
    const senha = requisicao.body.senha;
    if (usuario && senha && usuario === 'julio' && senha === '123')
    {
        requisicao.session.usuarioLogado=true;
        resposta.redirect('/cadastroCliente.html');
    }
    else{
        resposta.send("<p>Falha no login!</p><br/><button> onclick='history.back()'>Tentar Novamente!")
    }
    });
    export default rotaLogin;
