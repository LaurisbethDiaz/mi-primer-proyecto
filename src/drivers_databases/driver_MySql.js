const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root@localhost',
    password: '',
    database: 'proyecto_administrador_notas'
});
connection.connect((err) => {
    if (err) throw err;
    console.log('mysql ==========> Conexcion exitosa');
});
module.exports = mysql;