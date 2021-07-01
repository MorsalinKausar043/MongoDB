
// const mongoose = require('mongoose') ;
// const Playlist = require("./index") ;

// const findata = async () =>{
//     try {

//         const result = await Playlist.find();
//         console.log(result);
        
//     } catch (error) {
//         console.log(error);
//     }
// }

// findata()

const Jsplaylist = require("./schema");


const newcode = async  () =>{
    try {
        
        const Reactjs = new Jsplaylist({
            name : "Reactjs",
            type : "Front-End",
            videos : 40,
            author : "Morsalin",
            email : "morsalin048@gmail.com"

        })

        const Nodejs = new Jsplaylist({
            name : "Nodejs",
            type : "Back-End",
            videos : 30,
            author : "Morsalin",
            email : "morsalin043@gmail.com"

        })

        const MongoDB = new Jsplaylist({
            name : "MongoDB",
            type : "Database",
            videos : 60,
            author : "Morsalin",
            email : "kausar042@gmail.com"

        })

        const ExpressJs = new Jsplaylist({
            name : "ExpressJs",
            type : "Back-End",
            videos : 50,
            author : "Morsalin",
            email : "kausar043@gmail.com"

        })



        const result =await Jsplaylist.insertMany([Reactjs,Nodejs,MongoDB,ExpressJs]);
        console.log(result);

    } catch (error) {
        console.log(error);
    }
};

newcode()