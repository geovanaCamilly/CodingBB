const sqlite3 = require('sqlite3');

const db = new sqlite3.Database('./database.sqlite', (error) => {
  if (error) {
    console.log(error);
    return;
  }
  db.run('create table if not exists people (id integer primary key, name text)', (error) => {
    if (error) {
      console.log(error);
      return;
    }
    db.run('insert into people (name) values (?)', ['Gabriel'], (error) => {
      if (error) {
        console.log(error);
        return;
      }
      db.all('select * from people', (error, rows) => {
        console.log(error, rows);
        db.close();
      });
    });
  });
});
