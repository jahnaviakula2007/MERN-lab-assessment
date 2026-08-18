const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = 3000;

// Middleware to read form data
app.use(express.urlencoded({ extended: true }));

// Cookie middleware
app.use(cookieParser());

// Session middleware
app.use(
    session({
        secret: "mySecretKey",
        resave: false,
        saveUninitialized: false
    })
);

// Home Page
app.get("/", (req, res) => {
    res.send(`
        <h1>Week 8 - Login, Logout and Cookies</h1>

        <a href="/login">Login</a><br><br>
        <a href="/dashboard">Dashboard</a><br><br>
        <a href="/logout">Logout</a><br><br>
        <a href="/create-cookie">Create Cookie</a><br><br>
        <a href="/read-cookie">Read Cookie</a>
    `);
});

// Login Page
app.get("/login", (req, res) => {
    res.send(`
        <h2>Login</h2>

        <form method="POST" action="/login">

            Username:
            <input type="text" name="username" required>

            <br><br>

            Password:
            <input type="password" name="password" required>

            <br><br>

            <button type="submit">Login</button>

        </form>
    `);
});

// Login
app.post("/login", (req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    if (username === "admin" && password === "1234") {

        // Maintaining login state
        req.session.username = username;

        res.send(`
            <h2>Login Successful</h2>

            <p>Welcome ${username}</p>

            <a href="/dashboard">Go to Dashboard</a>
        `);

    } else {

        res.send(`
            <h2>Invalid Username or Password</h2>

            <a href="/login">Try Again</a>
        `);
    }
});

// Dashboard
app.get("/dashboard", (req, res) => {

    if (req.session.username) {

        res.send(`
            <h2>Dashboard</h2>

            <p>Welcome ${req.session.username}</p>

            <p>You are logged in.</p>

            <a href="/logout">Logout</a>
        `);

    } else {

        res.send(`
            <h2>Access Denied</h2>

            <p>Please login first.</p>

            <a href="/login">Login</a>
        `);
    }
});

// Logout
app.get("/logout", (req, res) => {

    req.session.destroy((error) => {

        if (error) {
            res.send("Logout failed");
        } else {

            res.send(`
                <h2>Logout Successful</h2>

                <p>You have been logged out.</p>

                <a href="/login">Login Again</a>
            `);
        }
    });
});

// Create Cookie
app.get("/create-cookie", (req, res) => {

    res.cookie("studentName", "Jahnavi");

    res.send(`
        <h2>Cookie Created Successfully</h2>

        <p>Cookie: studentName = Jahnavi</p>

        <a href="/read-cookie">Read Cookie</a>
    `);
});

// Read Cookie
app.get("/read-cookie", (req, res) => {

    const studentName = req.cookies.studentName;

    if (studentName) {

        res.send(`
            <h2>Cookie Found</h2>

            <p>Student Name: ${studentName}</p>
        `);

    } else {

        res.send(`
            <h2>No Cookie Found</h2>

            <a href="/create-cookie">Create Cookie</a>
        `);
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});