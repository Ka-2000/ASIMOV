const express =  require('express');
const ctrlClasses = require('../controllers/controllerClasses.js');
const router = express.Router() ;

router.get('/:id', ctrlClasses.affichageClasse);

module.exports = router 