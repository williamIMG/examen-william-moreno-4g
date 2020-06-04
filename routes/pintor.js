const express =require('expres');

let pintor = require('../controllers/Pintorescontrollers.js');

let router = express.router();

router.get('/', pintor.list())

module.export =router;