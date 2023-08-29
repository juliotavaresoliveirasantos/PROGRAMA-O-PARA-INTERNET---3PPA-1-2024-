import mysql from 'mysql2/promise'

export default async function conectar(){
    if (global.poolConexoes){
        return await global.poolConexoes.getConnection();
    }
    global.poolConexoes = mysql.createPool({
        host: 'localhost',
        port: 3306,
        database: 'backendaluno11-ppiadsead	',
        password: 'vU4AXFhHMXY3Zh4rpVZm',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0,
        idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
        queueLimit: 0,
        enableKeepAlive: true,
        keepAliveInitialDelay: 0

    });

    const conexao = global.poolConexoes.getConnection();
    return await conexao;

}