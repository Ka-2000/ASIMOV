const express =  require('express');
const ctrlProfesseurs = require('../controllers/controllerProfesseurs.js');
const router = express.Router() ;

router.get('/', ctrlProfesseurs.affichageProfesseurs);

module.exports = router 