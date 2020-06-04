let mongoose = require('mongoose');
let pintores = require('../models/pintores');

let pintoresController = {};

pintoresController.list = (req, res)=>{
    pintores.find({})
        .limit(30)
        .skip(0)
        .exec((err, pintor)=>{
            if (err){
                console.log('Error:',err);
            }
            res.render('../views/index',{
                epintores: pintor,
                title: "Listado de pintores",
                year: new Date().getFullYear()
            });
        })
};

module.exports = PintoresControllers;