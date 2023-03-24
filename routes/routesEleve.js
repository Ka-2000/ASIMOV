const express =  require('express');
const ctrlEleve = require('../controllers/controllerEleves.js');
const router = express.Router() ;

router.get('/', ctrlEleve.affichageEleves);
router.get('/afficherUneClasse/:id', ctrlEleve.afficherElevesClasse);
router.post('/ajouterEleve', ctrlEleve.ajouterEleve);
router.get('/modifierEleve/:id', ctrlEleve.affichageUnEleve);
router.post('/modifierEleve/:id', ctrlEleve.modifierEleve);
router.get('/supprimerEleve/:id', ctrlEleve.supprimerEleve);

module.exports = router 