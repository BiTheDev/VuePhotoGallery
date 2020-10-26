const goose = require("mongoose");
// const uniqueValidator = require('mongoose-unique-validator');

goose.connect(
  "mongodb://localhost:27017/PhotoLibrary",
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  (errs) => console.log(errs ? errs : "db PhotoLibrary")
);

const PhotoSchema = new goose.Schema(
  {
    _id: {
      type: String,
    },
    name: {
      type: String,
      required: [true, "Photo must contain a Name"],
      minlength: [3, "Photo name must be longer than 3 characters"],
      unique: true,
    },
    description: {
      type: String,
      required: [true, "a Photo must contain a description"],
      min: [5, "minimum 5 character length"],
    },
    img: {
      data: Buffer,
      contentType: String,
    },
  },
  { timestamps: true }
);

// ProductSchema.plugin(uniqueValidator,  { message: 'Error, {PATH} already in the database' });
const PhotoLibrary = goose.model("PhotoLibrary", PhotoSchema);
module.exports = PhotoLibrary;

// module.exports = goose.model('Belt', ProductSchema);
