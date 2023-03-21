const express =  require('express');
const ctrlConnexion = require('../controllers/controllerConnexion.js');
const router = express.Router() ;

router.get('/', ctrlConnexion.affichageAccueil);
router.post('/accueil', ctrlConnexion.controleConnexion);
router.get('/logout', ctrlConnexion.deconnexion)

module.exports = router 