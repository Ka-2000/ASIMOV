const express =  require('express');
const ctrlClasses = require('../controllers/controllerClasses.js');
const router = express.Router() ;

router.get('/:id', ctrlClasses.affichageMesClasses);
router.get('/principal', ctrlClasses.affichageToutesClasses);

module.exports = router 