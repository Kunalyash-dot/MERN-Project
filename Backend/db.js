const mongoose = require("mongoose");
const mongoURI = "mongodb://127.0.0.1:27017/gofood";
const { Schema } = mongoose;

// Schema for Sample data fetch 

const sch = new Schema(
  {
    CategoryName: String,
    email:String
  },
  { versionKet: false }
);

const monmodel = mongoose.model("sample", sch);

// Schema for category data fetch 

const category = new Schema(
  {
    CategoryName: String,
    email:String
  },
  { versionKet: false }
);

const categoryData = mongoose.model("category", category);

const connectToMongo =  () => {
    mongoose.connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true})

    .then(() =>  {
      console.log("Connected to Mongo Successfully");
      monmodel.find({}).then((value) => {
      global.food_item = value;
      // console.log(global.food_item);
    }).then(()=>{
      categoryData.find({}).then((value) => {
        global.food_category = value;
        // console.log(global.food_category);
      })
    })
    .catch((err) => console.log("error"));
    }     
    )
  };

module.exports = connectToMongo;
