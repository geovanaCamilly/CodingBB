const sqlite3 = require('sqlite3').verbose();

//Abrindo o banco
const db = new sqlite3.Database('/home/geovana/projetos-avaliativos/database2.db');

  function selecionarPorNome(nome) {
   const query = "select distinct NOME from MUSICA"
    db.all(query, (err, rows) => {
      if (err) {
          console.error(err.message);
      }
      console.log(rows);
      });

  };
  //funciona!
  //selecionarPorNome()

  function insere(MUSICA, NOME, DATA_LANCAMENTO, valores) {
    const query = `insert into MUSICA (NOME, DATA_LANCAMENTO) VALUES ${valores}`;
    db.all(query, (err, rows) => {
      if (err) {
          console.error(err.message);
      }
      console.log(rows);
      });

  }
  var ins = insere("Rainha", "11/08/2020", )
  insere();

 function deleta(MUSICA, Codigo, valor) {
   const query = `delete from MUSICA where ${Codigo} = ?`;
   db.all(query, [valor], (err, rows) => {
     if (err) {
         console.error(err.message);
     }
     console.log(rows);
     });

 }
 var del = deleta("MUSICA", "CODIGO_MUSICA", "7")
 deleta();

function atualiza() {
  const query = `update MUSICA
   set NOME = 'passarinhos'
    where CODIGO_MUSICA = 4`;
  db.all(query, (err, rows) => {
    if (err) {
        console.error(err.message);
    }
    console.log(rows);
    });

}

//atualiza()

function selecionarTudo() {
  const query = "select * from MUSICA"
  db.all(query, (err, rows) => {
    if (err) {
        console.error(err.message);
    }
    console.log(rows);
    });

}
//funciona!
selecionarTudo()


//Fecha o banco d dados
db.close((err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Conexão com o banco de dados fechada.');
  });