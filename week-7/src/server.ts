import express from "express";

const app = express();
const PORT = 3000;

// Set EJS as template engine
app.set("view engine", "ejs");

// Middleware to read form data
app.use(express.urlencoded({ extended: true }));

// Display form
app.get("/", (req, res) => {
    res.render("form", { error: "", success: "", data: {} });
});

// Accept form input and perform validation
app.post("/submit", (req, res) => {
    const { name, email, age } = req.body;

    // Basic validation
    if (!name || !email || !age) {
        return res.render("form", {
            error: "All fields are required!",
            success: "",
            data: req.body
        });
    }

    if (!email.includes("@")) {
        return res.render("form", {
            error: "Please enter a valid email address!",
            success: "",
            data: req.body
        });
    }

    if (Number(age) < 18) {
        return res.render("form", {
            error: "Age must be 18 or above!",
            success: "",
            data: req.body
        });
    }

    res.render("form", {
        error: "",
        success: "Form submitted successfully!",
        data: req.body
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});