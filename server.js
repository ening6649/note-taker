const express = require ('express')
const path = require('path');
const router = require('express').Router();

const PORT = process.env.PORT || 3001;
// instantiate the server
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

// app.get('/', (req, res) =>
//   res.sendFile(path.join(__dirname, '/public/index.html'))
// );


// router.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, './public/index.html'));
// });

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});
  

