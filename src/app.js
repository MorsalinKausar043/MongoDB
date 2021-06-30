
const mongoose = require('mongoose') ;
const Playlist = require("./index") ;

const findata = async () =>{
    try {

        const result = await Playlist.find();
        console.log(result);
        
    } catch (error) {
        console.log(error);
    }
}

findata()