var sqlite3 = require('sqlite3').verbose();

var db = require('/home/geovana/database/db');

db.serialize(() => {
    db.each("SELECT * FROM musica", (err, row) => {
        if(err) {
            console.error(err.message);
        }
        console.log(row);
    });
});

db.close((err) => {
    if(err) {
        console.error(err.message);
    }

    console.log('Fechado');
});