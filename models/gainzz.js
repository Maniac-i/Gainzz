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
          required: true,
        },
        name: {
          type: String,
          trim: true,
          required: true
        },
        weight: {
          type: [Number],
          required: true,
        },
        sets: {
          type: [Number],
          required: true,
        },
        reps: {
          type: [Number],
          required: true,
        }
        
      }
    ]
  }
)

const Gainzz = mongoose.model("Gainzz", gainzzSchema);

module.exports = Gainzz;