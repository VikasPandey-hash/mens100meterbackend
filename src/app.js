const express = require("express") ;
const app = express() ;
const mongoose = require("mongoose") ;
require("../src/db/conn") ;
const AthleteRanking = require("../src/models/mens");
const router = require("./routers/men");

const port = process.env.PORT || 3000 ;

app.use(express.json()) ;

app.use(router) ;

app.listen(port , () =>{
    console.log(`connnection is live at port , ${port}`)
})