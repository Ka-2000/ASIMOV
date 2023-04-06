const express =  require('express');
const ctrlNote = require('../controllers/controllerNotes.js');
const router = express.Router() ;

router.get('/mesNotes', ctrlNote.redirectionNoteEleve);
router.get('/notesEleve/:id', ctrlNote.affichageNote);
router.post('/ajouterNote', ctrlNote.ajouterNote);
router.get('/modifierNote/:id', ctrlNote.affichageUneNote);
router.post('/modifierNote/:id', ctrlNote.modifierNote);
router.get('/supprimerNote/:id', ctrlNote.supprimerNote);

module.exports = router 