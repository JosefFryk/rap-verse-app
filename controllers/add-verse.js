
const Verse = require('../models/Verse')


module.exports = {
    getVerse: async (req, res) => {
        console.log(req.user)
        try{
            const verseItem = await Verse.find({userId: req.user.userId})
            const nameItem = await Verse.find({userId: req.user.userId})
            res.render('verse.ejs', {verses: verseItem, name: nameItem, user: req.user})
        }catch (err){
            console.log(err)
        }
    },
    createVerse : async(req,res) => {
        try{
            await Verse.create({verse: req.body.verseItem, userId: req.user.userId, name: req.body.nameItem, })
            console.log('Verse has been added')
            res.redirect('/add-verse')
        }catch (err){
            console.log(err)
        }
    },
    deleteVerse: async (req, res)=>{
        console.log(req.body.verseIdFromJSFile)
        try{
            await Verse.findOneAndDelete({_id:req.body.verseIdFromJSFile})
            console.log('Deleted Verse')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    }

}