export default function autenticar(requisicao, resposta, next){
    if (requisicao.session.usuarioLogado){
        next();
    }
    else{
        resposta.redirect('/aluno11-ppiadsead/login.html');
        }
}