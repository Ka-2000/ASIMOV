const express =  require('express');
const mainCtrl = require('../controllers/ctrlMain.js');
const router = express.Router() ;

router.get('/', mainCtrl.affichageAccueil);
router.post('/accueil', mainCtrl.controleConnexion);
router.get('/logout', mainCtrl.deconnexion)

module.exports = router 