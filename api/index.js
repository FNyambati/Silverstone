//DEPENDENCIES
var express = require('express'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  mongoose = require('mongoose'),
  session = require('express-session'),
  config = require('./config'),
  passport = require('./services/passport');





//CONTROLLERS
var laptimeCtrl = require('./controllers/laptimeController');
var winnersCtrl = require('./controllers/winnersController');
var carCtrl = require('./controllers/carController');
var bikeCtrl = require('./controllers/bikeController');
var userCtrl = require('./controllers/userController');
var profileCtrl = require('./controllers/profileController');
var eventCtrl = require('./controllers/eventController');

//POLICES/////////
var isAuthed = function(req, res, next) {
  if (!req.isAuthenticated()) return res.status(401).send();
  return next();
};




// App definition//////////
var app = express();


// Middleware/////////
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname + "./../public"));
app.use(session({
  secret: config.SESSION_SECRET,
  saveUninitialized: false,
  resave: false
}));
app.use(passport.initialize());
app.use(passport.session());
///////////////// ENDPOINTS///////////////////




////////////////////// USERS /////////////////
app.post('/users', userCtrl.register);
app.get('/me', isAuthed, userCtrl.getCurrentUser);
app.put('/users/:_id', isAuthed, userCtrl.update);

app.post('/login', passport.authenticate('local', {
  successRedirect: '/me'
}));
app.get('/logout', function(req, res, next) {
  req.logout();
  return res.status(200).send('logged out');
});


/////////////// LAPTIMES//////////////////
app.post('/laptime', laptimeCtrl.create);
app.get('/laptime', laptimeCtrl.read);
app.put('/laptime/:id', laptimeCtrl.update);
app.delete('/laptime/:id', laptimeCtrl.delete);


/////////////PAST WINNERS//////
app.post('/winner', winnersCtrl.create);
app.get('/winner', winnersCtrl.read);
app.put('/winner/:id', winnersCtrl.update);
app.delete('/winner/:id', winnersCtrl.delete);


/////////CAR RENTAL///////
app.post('/car', carCtrl.create);
app.get('/car', carCtrl.read);
app.put('/car/:id', carCtrl.update);
app.delete('/car/:id', carCtrl.delete);



////BIKE RENTAL //////////////
app.post('/bike', bikeCtrl.create);
app.get('/bike', bikeCtrl.read);
app.put('/bike/:id', bikeCtrl.update);
app.delete('/bike/:id', bikeCtrl.delete);



//////PROFILE INFO///////////////
app.post('/profile', profileCtrl.create);
app.get('/profile', profileCtrl.read);
app.put('/profile/:id', profileCtrl.update);

//////////EVENT INFO /////////////////
app.get('/events', eventCtrl.read);  //DONT FORGET TO USE THE 'S' AT THE END OF ENDPOINT
app.post('/event', eventCtrl.create);
app.get('/events', eventCtrl.read);
app.get('event/:id', eventCtrl.readUserEvent);
app.delete('/event/:id',eventCtrl.delete);




///////// ADMIN FUNCTIONS//////////



app.get('/pendingEvents', eventCtrl.pendingEvents);
app.put('/event/:id', eventCtrl.update);



//CONNECTIONS TO MONGO AND PORT /////////
var mongoURI = config.MONGO_URI;
var port = config.PORT;
mongoose.connect(mongoURI);
mongoose.connection.once('open', function() {
  console.log('POWER LEVEL OVER ' + port + ' GIVE ME YOUR ENERGY');
  app.listen(port, function() {
    console.log("SPIRIT BOMB READY!");

  });
});
