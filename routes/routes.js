const express = require('express');
const path = require('path');
const router = express.Router();

console.log();
router.get('/', (req, res, next) => {
    res.sendFile('home.html', { root: './pages' });
});
router.get('/test', (req, res, next) => {
    console.log("soe");
});


module.exports = router;