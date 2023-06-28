const sqlite3 = require('sqlite3').verbose();

//Abrindo o banco
const db = new sqlite3.Database('/home/geovana/projetos-avaliativos/database2.db');

const query = "SELECT * FROM CANTOR_BANDA"

//Insere
const insertQuery = `INSERT INTO CANTOR_BANDA (nome, tipo) VALUES ('xpto', '2')`;
db.all(query, function (err) { 
    if (err) {
      console.error(err.message);
      return;
    }
  });

//Faz update
const data = `UPDATE CANTOR_BANDA
 SET NOME = 'zzz'
 WHERE CODIGO_CANTOR_BANDA = 4`;
 db.run(data, function (err) { 
    if (err) {
      console.error(err.message);
      return;
    }
  }); 


//Deleta
 const del = `DELETE FROM CANTOR_BANDA WHERE CODIGO_CANTOR_BANDA = 16`;
 db.run(del, function (err) { 
    if (err) {
      console.error(err.message);
      return;
    }
  });
 
//Mostra os dados da tabela
console.log("----- delete -----")
db.all(query, (err, rows) => {
if (err) {
    console.error(err.message);
}
console.log(rows);
});

//Fecha o banco
db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Conexão com o banco de dados fechada.');
});
//teste
