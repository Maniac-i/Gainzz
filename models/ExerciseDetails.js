const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseDetailsSchema = new Schema({
  weight: {
    type: Number,
    trim: true,
  },
  sets: {
    type: Number,
    trim: true,
  },
  reps: {
    type: Number,
    trim: true,
  }, 
  date: {
    type: Date,
    default: Date.now(),
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  exercise: {
    type: Schema.Types.ObjectId,
    ref: "Exercise",
  },
});

const ExerciseDetails = mongoose.model('ExerciseDetails', exerciseDetailsSchema);

module.exports = ExerciseDetails;