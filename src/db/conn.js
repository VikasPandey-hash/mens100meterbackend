const mongoose = require("mongoose") ;
mongoose.connect("mongodb+srv://vikaspandey1993:india%401993@cluster0.iltaadg.mongodb.net/olympics?retryWrites=true&w=majority" , {
   //useCreateIndex : true ,
    useNewUrlParser : true ,
  useUnifiedTopology : true 
}).then(()=>{
    console.log("connection successful by vikas pandey")
}).catch((e)=>{
console.log("No connection ")
})

