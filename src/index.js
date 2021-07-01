
// const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost:27017/Programdata" , { useNewUrlParser : true , useUnifiedTopology : true , useCreateIndex : true , useFindAndModify : true }).then(() => console.log("mission successfull and this port is 27017")).catch((error) => console.log(error));

// const dataSchema = new mongoose.Schema({
//     name : {
//         type : String,
//         required : true
//     },
//     type : String,
//     author : String,
//     videos : Number,
//     active : Boolean,
//     date : {
//         type : Date,
//         default : Date.now
//     }
// })

// const Playlist = new mongoose.model("Playlist" , dataSchema) ;

// const codetime = async () =>{
//     try {

//         const ReactJs = new Playlist({
//             name : "ReactJs",
//             type : "Front-End",
//             author : "Morsalin Kausar",
//             videos : 30,
//             active : true
//         })

//         const NodeJs = new Playlist({
//             name : "NodeJs",
//             type : "Back-End",
//             author : "Morsalin Kausar",
//             videos : 40,
//             active : true
//         })

//         const MongoDB = new Playlist({
//             name : "MongoDB",
//             type : "DataBase",
//             author : "Morsalin Kausar",
//             videos : 50,
//             active : true
//         })

//         const Javascript = new Playlist({
//             name : "Javascript",
//             type : "Full-Stack",
//             author : "Morsalin Kausar",
//             videos : 230,
//             active : true
//         })

//         // let result = await Playlist.insertMany([ReactJs,NodeJs,MongoDB,Javascript]);
//         // console.log(result);
        
//     } catch (error) {
//         console.log(error);
//     }
// }

// codetime();


// module.exports = Playlist ;