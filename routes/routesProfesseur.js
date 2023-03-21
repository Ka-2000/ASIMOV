const express =  require('express');
const ctrlProfesseurs = require('../controllers/controllerProfesseurs.js');
const router = express.Router() ;

router.get('/', ctrlProfesseurs.affichageProfesseurs);
router.get('/modifierProfesseur/:id', ctrlProfesseurs.affichageUnProfesseur);
router.post('/modifierProfesseur/:id', ctrlProfesseurs.modifierProfesseur);

module.exports = router 