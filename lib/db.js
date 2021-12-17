const fs = require('fs');
const path = require('path');

function findById(id, db) {
    const result = db.filter(db => db.id === id)[0];
    return result;
  }
  
  function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
      path.join(__dirname, '../db/db.json'),
      JSON.stringify( notesArray )
    );
    return notesArray;
  }
  



module.exports = {
    createNewNote,
    findById
}