const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema(
  {
    // I want to be able to log multiple exercises in a workout on a given day {object}.
    day: {
      type: Date,
      default: () => new Date(),
    },
    // I should also be able to track the name, type, weight, sets, reps, and duration of exercise [array].
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
