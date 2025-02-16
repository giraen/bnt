import 'dotenv/config'
import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

app.listen(8081, () => {
    console.log("Listening to port 8081");
})

app.post('/register', (req, res) => {
    console.log("Request Body:", req.body);
    const { bntId, lastname, firstname, middle_initial, year_level, role, school } = req.body;

    if ( !bntId || !lastname || !firstname || !middle_initial || !year_level || !role || !school) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const query = `
        INSERT INTO registrations (bnt_id, lastname, firstname, middle_initial, year_level, role, school) 
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(query, [ bntId, lastname, firstname, middle_initial, year_level, role, school], (err, result) => {
        if (err) {
            console.error("Error inserting data:", err);
            return res.status(500).json({ message: "Database error" });
        }

        res.status(201).json({ message: "Registration successful" });
    });
});
