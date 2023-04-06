const express = require("express");
const { Pool } = require("pg");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
    user: "postgres",
    database: "formtask",
    password: "password",
});



app.post("/add", async (req, res) => {
    const {
        firstName,
        lastName,
        dob,
        email,
        gender,
        address1,
        address2,
        city,
        state,
        country,
        zipcode,
    } = req.body;

    try {
        const response = await pool.query(
            "insert into users (fname,lname,dob,email,gender,address1,address2,city,state,country,zipcode) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11) returning fname",
            [
                firstName,
                lastName,
                dob,
                email,
                gender,
                address1,
                address2,
                city,
                state,
                country,
                zipcode,
            ]
        );
        console.log(response.rows[0],"was added");
        res.json({
            fname: response.rows[0].fname,
        });
    } catch (err) {
        console.log(err);
    }
});

app.get('/details', async(req, res)=>{
    try {
        const data = await pool.query('select * from users');
        console.log(data.rows)
        res.json(data.rows);
    }
    catch(err) {
        res.err(err.message);
    }
})

app.listen(5000, (req, res) => {
    console.log("server connected");
});
