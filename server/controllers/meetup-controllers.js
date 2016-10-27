
var Meetup = require('../models/meetup');
module.exports.create = function(req,res){


  var meetup  = new Meetup(req.body)
  meetup.save(function(err,result){
	res.json(result)	
  });


}

module.exports.getMeetupList = function(req,res){

	Meetup.find({},function(err,results){
		res.json(results)
	});
};