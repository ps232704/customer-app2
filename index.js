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
                res.send('Values Inserted');
            }
        }
    );
});
