const router = require('express').Router();
const {db} = require ('../../db/db.json')
const {createNewNote} = require ('../../lib/db')


router.get('/notes', (req, res) => {
    let results = db;
    res.json(results);
});


// delete route
router.get('/animals/:id', (req, res) => {
    const result = findById(req.params.id, animals);
    if (result) {
      res.json(result);
    } else {
      res.send(404);
    }
});
  
router.post('/notes', (req, res) => {
    // set id based on what the next index of the array will be
    req.body.id = db.length.toString();
    const db = createNewNote(req.body, db);
    res.json(db);   
});

module.exports = router;