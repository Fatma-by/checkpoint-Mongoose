const mongoose = require('mongoose');

//Create a person with this prototype:


const PersonSchema= new mongoose.Schema({
    name: {
        type: String,
        required: true
      },
      age: {
        type: Number,
      },
      favoriteFoods: {
        type: [String],
      },
})

module.exports = mongoose.model('Person', PersonSchema);