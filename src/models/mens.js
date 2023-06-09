//const express = require("express") ;
const { default: mongoose } = require("mongoose");

const athleteSchema = new mongoose.Schema({
    ranking : {
        type : Number ,
        required : true ,
        unique : true 
    } ,
    name : {
        type : String ,
        required : true ,
        trim : true 
    },
    dob : {
        type : Date  ,
        required : true ,
        trim : true 
    } ,
    country : {
        type : String ,
        required : true ,
        trim : true 
    },
    score :{
          type : Number ,
          required : true ,
          trim : true 
    },
    event : {
        type : String ,
        default : "100m"
    }
})
// we are creating a new coollection
const AthleteRanking = new mongoose.model("AthleteRanking" , athleteSchema)

module.exports = AthleteRanking ;