const mongoose = require('mongoose');
require('mongoose-type-email');


const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
      userName: {
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
      },

      date: {
        type: Date,
        default: Date.now(),
      },

      exercises: [
        {
          type: Schema.Types.ObjectId,
          ref: "Exercise"
        }
      ]
    });


const Gainzz = mongoose.model("User", userSchema);

module.exports = Gainzz;