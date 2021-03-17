const mongoose = require('mongoose');
require('mongoose-type-email');

const Schema = mongoose.Schema;

const gainzzSchema = new Schema(
  {
    user: {
      firstName: {
        type: String,
        trim: true,
        required: true
      },
      lastName: {
        type: String,
        trim: true,
        required: true
      },
      email: {
        type: mongoose.SchemaTypes.Email,
        trim: true,
        required: true
      },
      password: {
        type: String,
        trim: true,
        required: true
      }
    },

    exercises: [
      {
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
        weight: {
          type: [Number],
          default: [],
        },
        sets: {
          type: [Number],
          default: [],
        },
        reps: {
          type: [Number],
          default: [],
        },  
      },
    ]
  }
)

const Gainzz = mongoose.model("Gainzz", gainzzSchema);

module.exports = Gainzz;