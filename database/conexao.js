import mysql from "mysql2/promise";

const conexao = mysql.createPool({
    host: process.env.db_host,
    port: Number(process.env.db_port),
    user: process.env.db_user,
    password: process.env.db_password,
    database: process.env.db_name,
    waitForConnections: true,
    connectionLimit: 10
});

export default conexao;