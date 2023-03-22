const express =  require('express');
const ctrlClasses = require('../controllers/controllerClasses.js');
const router = express.Router() ;

router.get('/professeur', ctrlClasses.affichageMesClasses);
router.get('/principal', ctrlClasses.affichageToutesClasses);
router.post('/ajouterClasse', ctrlClasses.ajouterClasse)

module.exports = router 