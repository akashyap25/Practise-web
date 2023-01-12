const { stringify } = require("uuid");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const FileSchema= new Schema(
    {
        filePath: String,

    },
    {
        timeStamp:true,
    }
);

const File= mongoose.model('File',FileSchema);

module.exports= File;