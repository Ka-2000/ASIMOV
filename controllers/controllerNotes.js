const modelNote = require('../models/modelNotes');
const modelMatiere = require('../models/modelMatieres');

const cookieParser = require('cookie-parser');

const controllerClasse = {

	async affichageNote(req, res){

		if(req.cookies.role == "Principal"){
			
			try{

				const data1 = await modelNote.Notes.afficherNotesEleve(req, res)
				const data2 = await modelMatiere.Matieres.afficherMatieres()

				if(data1){
					
					res.render("notes", {dataNotes:data1, dataMatieres:data2, cookie:req.cookies.role, idEleve:req.cookies.idEleve})
				
				}else{

					res.render("accueil")
				}

			} catch (error) {

				console.log(error)
			}
		
		}else{

			try{

               console.log("refus")

            } catch (error) {

                console.log(error)
            }
		}
	},

	async affichageUneNote(req, res){

		if(req.cookies.role == "Principal"){
			
			try{

				const data1 = await modelNote.Notes.afficherUneNote(req)
			
				if(data1){
					
					res.render("modifierNotes", {dataNotes:data1, cookie:req.cookies.role})
				
				}else{

					res.render("accueil")
				}

			} catch (error) {

				console.log(error)
			}
		
		}else{

			try{

               console.log("refus")

            } catch (error) {

                console.log(error)
            }
		}
	},

	async ajouterNote(req, res){

		try {

			const data = await modelNote.Notes.ajouterNote(req)

			if(data){

				res.redirect("/notes/notesEleve/" + req.cookies.idEleve);

			}else{

				console.log("champs incorrects")
				res.redirect("/notes");
			}

		} catch (error) {

			console.log(error)
		}
	},

	async supprimerNote(req, res){

		try {

			const data = await modelNote.Notes.supprimerNote(req)

			if(data){

				res.redirect("/notes/notesEleve/" + req.cookies.idEleve);

			}else{

				console.log("champs incorrects")
				res.redirect("/notes");
			}

		} catch (error) {

			console.log(error)
		}
	},

	async modifierNote(req, res){

		try {

			const data = await modelNote.Notes.modifierNote(req)

			if(data){

				res.redirect("/notes/notesEleve/" + req.cookies.idEleve);

			}else{

				console.log("champs incorrects")
				res.redirect("/notes/modifierNotes/" + req.params.id);
			}

		} catch (error) {

			console.log(error)
		}
	}
}

module.exports = controllerClasse
