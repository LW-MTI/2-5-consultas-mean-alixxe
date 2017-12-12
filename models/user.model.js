/**
 * Created by desarrollo-001 on 31/08/17.
 */
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    nombre:{
        type: String,
        required: true
    },
    apellido:{
     type: String,
     required: true
    },
    calle:{
     type: String,
     required: true
    },
    numero:{
     type: String,
     required: true
    },
    colonia:{
     type: String,
     required: true
    },
    codpostal:{
     type: String,
     required: true
    },
    estado:{
     type: String,
     required: true
    },
    tel_cel:{
     type: Number_serv,
     required: true
    },     
    email: {
        type: String,
        required: true,
        match: /.+@.+\.+/,
        lowercase: true
    },
    password: {
     type: String,
    require: true 
    }, 
    prod_serv:{
     type: String,
     required: true
    },
  
 });


const userModel = mongoose.model('User', userSchema, 'users');

module.exports = userModel;