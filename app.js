const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.send(`
        <h1>Welcome to My DevOps Project 🚀</h1>
        <h2>Containerized Web Application</h2>
        <p>Deployed using Docker and AWS EC2</p>
    `);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});