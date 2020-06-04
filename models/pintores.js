const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let pntoresSchema = new Schema({
    nombre:{
        type: String,
        required:[true, 'requerimos el nombre']
    },
    corriente:{
        type: String,
        required:[true, 'Requerimos el corriente']
    },
    nacionalidad:{
        type: String,
    },
    pintura:{
        type:String
    }
});

module.exports = mongoose.model('panini', paniniSchema);