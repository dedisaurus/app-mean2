var mongoose = require('mongoose');

var mongoose = require('mongoose');
var FoodtruckSchema = new mongoose.Schema({
    name: String,
    foodtype: String,
    avgcost: Number,
    owner : String,
    description: String,
    published_year: Number,
    publisher: String
  });
  
  module.exports = mongoose.model('Foodtruck', FoodtruckSchema);