// Imports
const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {

	res.json(["GET /rewrites"]);

});


router.get('/:id', (req, res) => {

	res.json(["GET /rewrites/" + req.params.id]);

});


router.put('/:id', (req, res) => {

    res.json(["PUT /rewrites/" + req.params.id]);

});


router.delete('/:id', (req, res) => {

    res.json(["DELETE /rewrites/" + req.params.id]);

});


module.exports = router;