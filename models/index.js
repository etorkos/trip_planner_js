var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/trip_planner');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var Place;
var Hotel;
var ThingToDo;
var Restaurant;

var Schema = mongoose.Schema;

var placeSchema = new Schema({
  address: String,
  city: String,
  state: String,
  phone: String,
  location: [Number]
});

var hotelSchema = new Schema({
  name: String,
  place: String,
  num_stars: {
    type: Number,
    min: 0,
    max: 5
  },
  amenities: String // comma delimited str list
});

var thingToDoSchema = new Schema({
  name: String,
  place: String,
  age_range: String
});

var retaurantSchema = new Schema({
  name: String,
  place: String,
  cuisine: String, // comma delimited str list
  price: {
    type: Number,
    min: 0,
    max: 5
  } //integer from 1-5 for how many dollar signs
})

Place = mongoose.model('Place', placeSchema);
Hotel = mongoose.model('Hotel', hotelSchema);
ThingToDo = mongoose.model('ThingToDo', thingToDoSchema);
Restaurant = mongoose.model('Restaurant', retaurantSchema);


module.exports = {
  'Place': Place,
  'Hotel': Hotel,
  'ThingToDo': ThingToDo,
  'Restaurant': Restaurant
}