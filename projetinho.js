const sqlite3 = require('sqlite3').verbose();


// open database in memory
const db = new sqlite3.Database('/home/geovana/projetos-avaliativos/database2.db') 


const query = 'SELECT * FROM CANTOR_BANDA';
db.all(query, (err,rows) => {
  if(err) {
    console.error(err.message);
    return;
  }

  console.log(rows);
});


// close the database connection
db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Close the database connection.');
});

