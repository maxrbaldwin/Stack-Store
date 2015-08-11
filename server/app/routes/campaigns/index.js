var Router = require('express').Router();
var Campaign = require('./../../../db/models/campaign');

// Get a single campaign
Router.get('/:id', function(req, res, next){
    campaign.findById({ _id: id }).exec()
        .then(function(err, campaign){
            console.log(err)
            console.log(campaign)
        });
});

module.exports = Router
