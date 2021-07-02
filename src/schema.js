
const mongoose = require("mongoose") ;
const validator = require("validator");

mongoose.connect("mongodb://localhost:27017/Jsdata",{ useCreateIndex : true , useFindAndModify : true , useNewUrlParser : true , useUnifiedTopology : true }).then(() => console.log("mission success")).catch((error) => console.log(error)) ;

const JsSchema = new mongoose.Schema({
    name : {
        type : String,
        trim : true,
        required : true,
        maxlength : 30,
        minlength : [3 , "not avilable this name"] ,
        unique : true,
        lowercase : true
    },
    type : String,
    videos : Number,
    author : {
        type : String,
        trim : true,
        uppercase : true ,
        maxlength : 30,
        minlength : [3, "not avilable this name"]
    },
    email : {
        type : String,
        required : true,
        unique : true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email")
            }
        }
    },
    date : {
        type : Date,
        default : Date.now
    }
});

const Jsplaylist = new mongoose.model("Jsplaylist" , JsSchema);

module.exports = Jsplaylist;


// this is gone for save this code in github