const express = require("express");
const app = express();
const cors = require('./middlewares/cors')
const { connectionString } = require("./connectionString");
const { mongoose } = require("mongoose");
// mongoose.set("strictQuery", false);
const router = require("./routes");

const initDB = () => mongoose.connect(connectionString);

startServer();


async function startServer() {
    initDB();
    app.use(express.json());
    app.use(cors())
    //session
    // trimbody
    app.use(router);
    app.listen("3030", () => console.log("REST listening on port 3030"));
}
