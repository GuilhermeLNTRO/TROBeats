const sql = require('mssql');
const config = require('../config/databaseConfig');

class DAO {
    constructor() {
        this.pool = new sql.ConnectionPool(config);
    }

    async connect() {
        try {
            await this.pool.connect();
            console.log('Conexão ao banco de dados estabelecida com sucesso!');
        } catch (err) {
            console.error('Erro ao conectar ao banco de dados:', err);
        }
    }

    async disconnect() {
        try {
            await this.pool.close();
            console.log('Conexão com o banco de dados encerrada com sucesso!');
        } catch (err) {
            console.error('Erro ao encerrar conexão com o banco de dados:', err);
        }
    }

    async executeQuery(query) {
        try {
            const result = await this.pool.request().query(query);
            console.log('Query executada com sucesso!');
            return result.recordset;
        } catch (err) {
            console.error('Erro ao executar a query:', err);
            throw err;
        }
    }
}

module.exports = DAO;