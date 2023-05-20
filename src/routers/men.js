const router = new express.Router() ;
const express = require("express") ;

const AthleteRanking = require("../models/mens")


router.post("/mens" , async (req , res) => {
    try {
        const addingMensRecords = new AthleteRanking(req.body)
        console.log(req.body) ;
        const insertMens = await addingMensRecords.save() ;
        addingMensRecords.save() ;
        res.status(201).send(insertMens)
    } catch (e) {
        res.status(400).send(e) ;
    }
})

// we will handle get req 

router.get("/mens" , async (req , res) => {
    try {
      const getMens= await  AthleteRanking.find({}).sort({"ranking" :1}) ;
      res.status(201).send(getMens) ;
    } catch (e) {
        res.status(400).send(e)
        
    }
})

router.get("/mens/:id" , async (req , res ) => {
    try {
        const _id = req.params.id ;
        const getMen = await AthleteRanking.findById(_id)
        res.send(getMen) ;
    } catch (e) {
        res.status(400).send(e)
        
    }
})

router.patch("/mens/:id" , async (req, res) => {
    try {
        const _id = req.params.id ;
        const getMen = await AthleteRanking.findByIdAndUpdate(_id , req.body ) ;
        res.send(getMen);
    } catch (e) {
     res.status(400).send(e) ;
        
    }
})

router.patch("/mens/:id" , async (req , res) => {
    try {
        const _id = req.params.id ;
        const getMen = await AthleteRanking.findByIdAndUpdate(_id , req.body ,{
            new : true
        })
        res.send(getMen)
    } catch (e) {
        res.status(500).send(e) ;
    }
})


router.delete("/mens/:id" , async (req, res) =>{
    try {
        const getMen = await AthleteRanking.findByIdAndDelete(req.params.id) ;
        res.send(getMen);
        
    } catch (e) {
        res.status(500).send(e)
        
    }
})


module.exports = router ; 