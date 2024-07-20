// const mongoose = require("mongoose");
// require("dotenv").config();

// let connect = () => {
//   return mongoose.connect("mongodb://127.0.0.1:27017/newbus");
// };

// module.exports= connect;

const mongoose = require("mongoose");

let connect = () => {
  return mongoose.connect(
    "mongodb+srv://maheswari1187:Maheswari_18@maheswari.duqhamd.mongodb.net/?retryWrites=true&w=majority ",
    { useNewUrlParser: true }
  );
};

module.exports = connect;


