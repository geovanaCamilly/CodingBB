const sqlite3 = require('sqlite3').verbose();

//Abrindo o banco
const db = new sqlite3.Database('/home/geovana/projetos-avaliativos/database2.db');

function selecionarPorNome(nome) {
    const query = "select * from CANTOR_BANDA"
     db.all(query, (err, rows) => {
       if (err) {
           console.error(err.message);
       }
       console.log(rows);
       });
   
   };
   
    selecionarPorNome()

    function selecionarPorNome(nome) {
        const query = "select distinct NOME from CANTOR_BANDA"
         db.all(query, (err, rows) => {
           if (err) {
               console.error(err.message);
           }
           console.log(rows);
           });
       
       };
       
        selecionarPorNome()

    //Fecha o banco d dados
db.close((err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Conexão com o banco de dados fechada.');
  });