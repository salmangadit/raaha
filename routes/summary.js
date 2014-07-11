var express = require('express');
var router = express.Router();
var data = require('../data/data');


router.get('/all', function(req, res) {
	var allData = [];

	for (var i=1; i<=11; i++){
		allData.push(data[i]);
	}

	res.render('single', { data: allData });
});

router.get('/:id', function(req, res) {
	console.log(req.params.id);
	var dataObj = data[req.params.id];

	var formatted = dataObj.content.replace(/\n/g,'<br />')
    .replace(/\t/g,'&nbsp;&nbsp;&nbsp;');
	res.render('summary', { title: 'Project Raaha', header: dataObj.title, desc: dataObj.description,content: dataObj.content});
});

module.exports = router;
