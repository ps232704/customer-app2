const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(cors());
app.use(express.json());

app.listen(19007, () => {
  console.log('databse is connected succesfully on port 19007!!!!!!')
});
const db = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: '',
  database: 'customer-app',
});

app.post('/create', (req, res) => {
  const name = req.body.name
  const age = req.body.age
  const country = req.body.country
  const position = req.body.position
  const wage = req.body.wage

  db.query('INSERT INTO customer (name, age, country, position, wage) VALUES (?,?,?,?,?)',
    [name, age, country, position, wage],
    (err, result) => {
      if (err) {
        console.log(err)
      }
      else {
        res.send('customer with values are inserted, your customer is now located in the database and on port 19007/customers!');
      }
    }
  );
});

app.get("/customers", (req, res) => {
  db.query("SELECT * FROM customer", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.put("/update", (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const age = req.body.age;
  const country = req.body.country;
  const position = req.body.position;
  const wage = req.body.wage;
  db.query(
    "UPDATE customer SET name = ?, age = ?, country = ?, position = ?, wage = ? WHERE customer. id = ?",
    [name, age, country, position, wage, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.put("/updatename", (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  db.query(
    "UPDATE customer SET name = ? WHERE id = ?",
    [name, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
app.put("/updateage", (req, res) => {
  const id = req.body.id;
  const age = req.body.age;
  db.query(
    "UPDATE customer SET age = ? WHERE id = ?",
    [age, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
app.put("/updatecountry", (req, res) => {
  const id = req.body.id;
  const country = req.body.country;
  db.query(
    "UPDATE customer SET country = ? WHERE id = ?",
    [country, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
app.put("/updateposition", (req, res) => {
  const id = req.body.id;
  const position = req.body.position;
  db.query(
    "UPDATE customer SET position = ? WHERE id = ?",
    [position, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
app.put("/updatewage", (req, res) => {
  const id = req.body.id;
  const wage = req.body.wage;
  db.query(
    "UPDATE customer SET wage = ? WHERE id = ?",
    [wage, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM customer WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
