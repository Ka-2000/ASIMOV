const express =  require('express');
const ctrlMatiere = require('../controllers/controllerMatieres.js');
const router = express.Router() ;

router.get('/', ctrlMatiere.affichageMatiere);
router.post('/ajouterMatiere', ctrlMatiere.ajouterMatiere);
router.get('/modifierMatiere/:id', ctrlMatiere.affichageUneMatiere);
router.post('/modifierMatiere/:id', ctrlMatiere.modifierMatiere);
router.get('/supprimerMatiere/:id', ctrlMatiere.supprimerMatiere);

module.exports = router 