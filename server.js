var express       	= require('express'),
    app      		= express(),
    bodyParser 		= require('body-parser'),
    mongoose  		= require('mongoose'), 
    meetupControllers = require('./server/controllers/meetup-controllers');


mongoose.connect('mongodb://localhost:27017/mean-demo');

app.get('/',function(req,res){
	res.sendFile(__dirname + '/client/view/index.html');
})

app.use(bodyParser());

app.use('/js',express.static(__dirname + '/client/js'));
app.use('/angularlib',express.static(__dirname + '/public/js/lib/angular'));

app.get('/api/meetups',meetupControllers.getMeetupList);
app.post('/api/meetups',meetupControllers.create);



app.listen(3000);

console.log('server is running');