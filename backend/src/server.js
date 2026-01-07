import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/api", (req, res) => {
    res.status(200).json({ message: "Welcome to the server" });
});

app.listen(PORT, () => {
    console.log(`server is up and running on port ${PORT} `);
});
