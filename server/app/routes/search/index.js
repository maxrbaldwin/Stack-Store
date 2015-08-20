var Router = require('express').Router();
var Campaign = require('../../../db/models/campaign.model.js');

Router.get('/title', function(req, res){
	if(req.query.q) {
		Campaign.find({'title': { '$regex': req.query.q, '$options': 'i'} })
			.exec(function(err, search){
				console.log(search, err)
				res.status(200).send(search)
			});
	} else {
		res.status(403).send('No query to search')
	}
});

module.exports = Router