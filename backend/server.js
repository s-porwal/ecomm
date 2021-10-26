const app = require("./app");

const dotenv = require("dotenv");
const connectDatabase = require("./config/database");


//config

dotenv.config({path:"backend/config/config.env"});

//connecting to database

connectDatabase();

const PORT = process.env.PORT;


app.listen(PORT, () => {
    console.log(`Server is listening on ${process.env.PORT}`);
})