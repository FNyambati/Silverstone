//DEPENDENCIES
var express     = require('express'),
    bodyParser  = require('body-parser'),
    cors        = require('cors'),
    mongoose    = require('mongoose'),
    session     = require('express-session');
//CONTROLLERS
var laptimeCtrl = require('./controllers/laptimeController');
var winnersCtrl = require('./controllers/winnersController');
var carCtrl = require('./controllers/carController');
var bikeCtrl = require('./controllers/bikeController');

// App definition//////////
var app = express();

// Middleware/////////
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname + "./../public"));
// ENDPOINTS///////////////////
// LAPTIMES////
app.post('/laptime', laptimeCtrl.create);
app.get('/laptime', laptimeCtrl.read);
app.put('/laptime/:id', laptimeCtrl.update);
app.delete('/laptime/:id', laptimeCtrl.delete);
//PAST WINNERS//////
app.post('/winner', winnersCtrl.create);
app.get('/winner', winnersCtrl.read);
app.put('/winner/:id', winnersCtrl.update);
app.delete('/winner/:id', winnersCtrl.delete);
//CAR RENTAL///////
app.post('/car', carCtrl.create);
app.get('/car', carCtrl.read);
app.put('/car/:id', carCtrl.update);
app.delete('/car/:id', carCtrl.delete);
////BIKE RENTAL //////////////
app.post('/bike', bikeCtrl.create);
app.get('/bike', bikeCtrl.read);
app.put('/bike/:id', bikeCtrl.update);
app.delete('/bike/:id', bikeCtrl.delete);
//CONNECT TO MONGO
var mongoUri = "mongodb://localhost:27017/personalProject";
mongoose.connection.once('open', function() {
  console.log("SPIRIT BOMB READY!");
});
mongoose.connect(mongoUri);
// PORT LISTEN
var port = 9000;
app.listen(port, function () {
  console.log('POWER LEVEL OVER ' + port + " GIVE ME YOUR ENERGY");
});
