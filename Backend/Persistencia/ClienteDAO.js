
import Cliente from "../Modelo/Cliente.js"
import conectar from "./Conexao"

export default class ClienteDAO{

    async gravar(cliente){ 
        if (cliente instanceof Cliente){
            const conexao = await conectar();
            const sql = 'INSERT INTO cliente (cpf, nome, endereco, bairro, cidade, estado, telefone, email) VALUES (?, ?, ?, ?, ?, ?, ?, ?,)';
            const parametros = [cliente.cpf, cliente.nome, cliente.endereco, cliente.bairro, cliente.cidade, cliente.estado, cliente.telefone, cliente.email]
            await conexao.execute(sql, parametros);
            global.poolConexoes.releaseConnection(conexao);
        }
    }

    async atualizar(cliente){
        if (cliente instanceof Cliente){
            const conexao = await conectar();
            const sql = 'UPDATE cliente SET nome = ?, endereco = ?, bairro = ?, cidade = ?, estado = ?, telefone = ?, email = ?, WHERE cpf = ?';
            const parametros = [cliente.nome, cliente.endereco, cliente.bairro, cliente.cidade, cliente.estado, cliente.telefone, cliente.email, cliente.cpf]
            await conexao.execute(sql, parametros);
            global.poolConexoes.releaseConnection(conexao);

        }
    }

    async excluir(cliente){
        if (cliente instanceof Cliente){
            const conexao = await conectar();
            const sql = 'DELETE FROM cliente WHERE cpf = ?';
            const parametros = [cliente.cpf];
            await conexao.execute(sql, parametros);
            global.poolConexoes.releaseConnection(conexao);

        }
    }

    async consultar (termo){
        const conexao = await conectar();
        if (!termo) termo = "";

        const listaClientes = [];
        const sql = 'SELECT * FROM cliente WHERE nome LIKE?';
        const parametros = ['%' + termo + '%'];
        const [rows] = await conexao.query(sql, parametros);
        for (const linha of rows){
            const cliente = new Cliente(linha.cpf, linha.nome, linha.endereco, linha.bairro, linha.cidade, linha.estado, linha.telefone, linha.email);
            listaClientes.push(cliente);
        }


        return listaClientes
    }

}