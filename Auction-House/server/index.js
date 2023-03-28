const express = require("express");
const app = express();
const cors = require('./middlewares/cors')
const { connectionString } = require("./connectionString");
const { mongoose } = require("mongoose");
const router = require("./routes");
const session = require("./middlewares/session");

const initDB = () => mongoose.connect(connectionString);

startServer();


async function startServer() {
    initDB();
    app.use(express.json());
    app.use(cors())
    app.use(session())
    // trimbody
    app.use(router);
    app.listen("3030", () => console.log("REST listening on port 3030"));
}
