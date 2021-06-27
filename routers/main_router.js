let express = require('express');
let router = express.Router();
let Shihpoan = require('./Shipoan.js');
let Naruto = require('./Naruto.js');
let Sasuke = require('./Sasuke.js');
router.use(express.static('./public'));
router.get('/', (req, res) => {
    let options = {
        root: __dirname,
        dotfiles: 'deny'
    }
    res.sendFile("index.html", options)
})
router.use('/Shihpoan', Shihpoan);
router.use('/Naruto', Naruto);
router.use('/Sasuke', Sasuke);

module.exports = router;