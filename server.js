
require("dotenv").config();


const express = require("express");
const cors = require("cors");
const movieRoutes = require("./src/routes/movieRoutes");


const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors());
app.use(express.json());

app.use("/api", movieRoutes);

app.get("/", (req, res) => {
    res.send("EUUUU AMOOOO BACKEND 🎉");
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});