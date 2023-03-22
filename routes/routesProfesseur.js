const express =  require('express');
const ctrlProfesseurs = require('../controllers/controllerProfesseurs.js');
const router = express.Router() ;

router.get('/', ctrlProfesseurs.affichageProfesseurs);
router.post('/ajouterProfesseur', ctrlProfesseurs.ajouterProfesseur);
router.get('/modifierProfesseur/:id', ctrlProfesseurs.affichageUnProfesseur);
router.post('/modifierProfesseur/:id', ctrlProfesseurs.modifierProfesseur);
router.get('/supprimerProfesseur/:id', ctrlProfesseurs.supprimerProfesseur);

module.exports = router 