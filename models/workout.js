const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: () => new Date(),
    },
    exercises: [
      {
        type: {
          type: String,
          trim: true,
          required: "Select type of exercise.",
        },
        name: {
          type: String,
          trim: true,
          required: "Type in name of exercise.",
        },
        duration: {
          type: Number,
          required: "Type in how long of exercise in question will last.",
        },
        weight: {
          type: Number,
          required: "Type in number of pounds."
        },
        reps: {
          type: Number,
          required: "Type in number of repetitions."
        },
        sets: {
          type: Number,
          required: "Type in number of sets for reps if any."
        },
        distance: {
          type: Number,
          required: "Type in distance length for exercise if any."
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

workoutSchema.virtual("totalDuration").get(function () {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;