const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  
  type: {
    type: String,
    trim: true,
    default: '',
  },

  name: {
    type: String,
    trim: true,
    default: '',
  },
  
  exerciseDetails: [
    {
      type: Schema.Types.ObjectId,
      ref: "ExerciseDetails"
    }
  ]
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;