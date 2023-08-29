import ClienteDAO from "../Persistencia/ClienteDAO.js";
import conectar from "../Conexao.js";

export default class ClienteDAO{

    #cpf
    #nome
    #endereço
    #bairro
    #cidade
    #estado
    #telefone
    #email

    constructor(cpf, nome, endereco, bairro, cidade, estado, telefone, email){
        this.#cpf = cpf;
        this.#nome = nome;
        this.#endereço = endereco;
        this.bairro = bairro;
        this.#cidade = cidade;
        this.#estado = estado;
        this.#telefone = telefone;
        this.#email = email;
    }

    get cpf(){
        return this.#cpf;
    }

    set cpf(novocpf){
        this.#cpf = novocpf;
    }

    get nome(){
        return this.#nome;
    }

    set nome(novonome){
        this.#nome = novoNome;
    }

    get endereço(){
        return this.#endereco;
    }

    set endereço(novoendereco){
        this.#endereço = novoEndereco;
    }

    get bairro(){
        return this.#bairro;
    }

    set bairro(novobairro){
        this.#bairro = novoBairro;
    }

    get cidade(){
        return this.#cidade;
    }

    set cidade(novocidade){
        this.#cidade = novoCidade;
    }

    get estado(){
        return this.#estado;
    }

    set estado(novoestado){
        this.#estado = novoEstado;
    }

    get telefone(){
        return this.#telefone;
    }

    set telefone(novotelefone){
        this.#telefone = novoTelefone;
    }

    get email(){
        return this.#email;
    }

    set email(novoemail){
        this.#email = novoEmail;
    }




    toJson(){
        return {
            cpf: this.#cpf,
            nome: this.#nome,
            endereço: this.#endereço,
            bairro: this.#bairro,
            cidade: this.#cidade,
            estado: this.#estado,
            telefone: this.#telefone,
            email: this.#email,




        }
    }

    async gravar(){
        const cliDAO = new ClienteDAO();
        await cliDAO.atualizar(this);

    }
    async excluir(){
        const cliDAO = new ClienteDAO();
        await cliDAO.excluir(this);
    }
    async consultar(termo){
        const cliDAO = new ClienteDAO();
        return await cliDAO.consultar(termo);
    }

}

const cliente = new cliente('123456789', 'Julio', 'Rua 1', 'Bairro 1', 'Cidade 1', 'SP', '123456789', '123456789');

console.log(cliente.toJson());
