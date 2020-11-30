const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema(
  {
    date: {
      type: Date,
      default: () => new Date(),
    },
    exercises: [
      {
        // name
        name: {
          type: String,
        },

        // type
        type: {
          type: String,
        },

        // weight
        weight: {
          type: Number,
        },

        // sets
        sets: {
          type: Number,
        },

        // reps
        reps: {
          type: Number,
        },

        // duration
        duration: {
          type: Number,
        },
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);
WorkoutSchema.virtual("totalDuration").get(function () {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
