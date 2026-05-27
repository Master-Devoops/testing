require("dotenv").config();

const express = require("express");
const mysql = require("mysql2");
const bcrypt = require("bcrypt");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

db.connect((err) => {
    if (err) {
        console.log("MySQL Connection Failed");
        console.log(err);
    } else {
        console.log("MySQL Connected");
    }
});


// REGISTER API
app.post("/register", async (req, res) => {

    try {

        const { fullname, email, password } = req.body;

        // Encrypt Password
        const hashedPassword = await bcrypt.hash(password, 10);

        const sql =
            "INSERT INTO users (fullname, email, password) VALUES (?, ?, ?)";

        db.query(
            sql,
            [fullname, email, hashedPassword],
            (err, result) => {

                if (err) {
                    return res.status(500).json({
                        success: false,
                        message: "User already exists"
                    });
                }

                res.json({
                    success: true,
                    message: "User Registered Successfully"
                });
            }
        );

    } catch (error) {

        res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
});


// LOGIN API
app.post("/login", (req, res) => {

    const { email, password } = req.body;

    const sql = "SELECT * FROM users WHERE email = ?";

    db.query(sql, [email], async (err, result) => {

        if (err) {
            return res.status(500).json({
                success: false,
                message: "Database Error"
            });
        }

        if (result.length === 0) {
            return res.status(401).json({
                success: false,
                message: "Invalid Email"
            });
        }

        const user = result[0];

        // Compare Password
        const match = await bcrypt.compare(
            password,
            user.password
        );

        if (!match) {
            return res.status(401).json({
                success: false,
                message: "Invalid Password"
            });
        }

        res.json({
            success: true,
            message: "Login Successful",
            user: {
                id: user.id,
                fullname: user.fullname,
                email: user.email
            }
        });
    });
});


app.get("/", (req, res) => {
    res.send("Backend Running Successfully");
});


app.listen(process.env.PORT, () => {
    console.log(`Server Running On Port ${process.env.PORT}`);
});