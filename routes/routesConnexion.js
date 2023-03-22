const express =  require('express');
const ctrlConnexion = require('../controllers/controllerConnexion.js');
const router = express.Router() ;

router.get('/', ctrlConnexion.affichagePageConnexion);
router.post('/accueil', ctrlConnexion.controleConnexion);
router.get('/accueil', ctrlConnexion.affichageAccueil);
router.get('/logout', ctrlConnexion.deconnexion);

module.exports = router 