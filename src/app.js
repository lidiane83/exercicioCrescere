const express = require ("express");
const routes = require("./route") ;

const app = express();



app.use(express.json());//garante json

app.use(routes);

app.listen(3000,()=>console.log("Ok"));

