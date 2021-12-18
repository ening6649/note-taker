const router = require('express').Router();
const db= require ('../../db/db.json')
const {createNewNote, findById} = require ('../../lib/db')



router.get('/notes', (req, res) => {
    console.log("line 7 ")  
  let results = db;
    res.json(results);
    console.log(results)
});






// delete route
router.delete('/notes/:id', (req, res) => {
    console.log(req.params.id)
    console.log('line22')
  const result = findById(req.params.id, db);
    if (result) {
      res.json(result);
     
      
      result.splice(0,1)
     
      
    } else {
      res.send(404);
    }
});
  
router.post('/notes', (req, res) => {
    // set id based on what the next index of the array will be
    req.body.id = db.length.toString();
    // console.log(db.notesArray.length)
    const note = createNewNote(req.body, db);
   
    res.json(note);   
    //  res.send('post request received')
});

module.exports = router;