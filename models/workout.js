const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now()
  },
  exercises: [
    {
      name : {
        type : String,
        trim : true
      },
      type : {
        type: String,
        trim : true
      },
      distance : {
        type : Number
      },
      duration : {
        type : Number
      },
      sets: {
        type : Number
      },
      weight: {
        type : Number
      },
      reps: {
        type : Number
      }
    }
  ]
});

const Workout = mongoose.model('workout', workoutSchema);

module.exports = Workout;