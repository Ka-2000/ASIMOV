const express =  require('express');
const ctrlClasses = require('../controllers/controllerClasses.js');
const router = express.Router() ;

router.get('/professeur', ctrlClasses.affichageMesClasses);
router.get('/principal', ctrlClasses.affichageToutesClasses);
router.post('/ajouterClasse', ctrlClasses.ajouterClasse);
router.get('/modifierClasse/:id', ctrlClasses.affichageUneClasse);
router.post('/modifierClasse/:id', ctrlClasses.modifierClasse);
router.get('/supprimerClasse/:id', ctrlClasses.supprimerClasse);

module.exports = router 