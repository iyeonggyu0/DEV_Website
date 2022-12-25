const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dataSchema = mongoose.Schema({
  useridx: {
    type: String,
    require: true,
    unique: true,
  },
  user_name: {
    type: String,
    maxlength: 10,
    required: true,
  },
  user_phoneNumber: {
    type: String,
    required: true,
    maxlength: 30,
  },
  user_schoolRun_bestScore: {
    type: Number,
    required: false,
    default: 0,
  },
  user_dino_bestScore: {
    type: Number,
    required: false,
    default: 0,
  },
  user_stairs_bestScore: {
    type: Number,
    required: false,
    default: 0,
  },
});

const Data = mongoose.model("data", dataSchema);
module.exports = { Data };

// const dataSchema = new mongoose.Schema({
//   useridx: { type: Number, required: true, unique: true },
//   user_name: { type: String, required: true },
//   user_phoneNumber: { type: Number, required: true },
//   user_schoolRun_bestScore: { type: Number, required: true },
//   user_dino_bestScore: { type: Number, required: true },
//   user_stairs_bestScore: { type: Number, required: true },
// });

// const dataModel = mongoose.model("data", dataSchema);

// const data = () =>
//   dataModel.create({
//     useridx: 20809,
//     user_name: "이영규",
//     user_phoneNumber: 01022742467,
//     user_schoolRun_bestScore: 100,
//     user_dino_bestScore: 120,
//     user_stairs_bestScore: 130,
//   });

// dataModel.find({ user_schoolRun_bestScore: 100 });

// console.log(dataSchema);
