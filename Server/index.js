import express from "express"
import Connection from "./database/db.js";
import cors from "cors"
import Routes from "./Routes/Routes.js";
const app = express();
import bodyParser from 'body-parser';

app.use(cors())

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }))        

app.use("/" , Routes)

const PORT = 4000;   
Connection();

app.listen(PORT , () => {
    console.log(`server connected successfully at ${PORT}`)     
})  