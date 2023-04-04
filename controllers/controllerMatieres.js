const modelMatiere = require('../models/modelMatieres');
const modelProfesseurs = require('../models/modelProfesseurs');
const cookieParser = require('cookie-parser');

const controllerClasse = {

	async affichageMatiere(req, res){

		if(req.cookies.role == "Principal"){
			
			try{

				const data1 = await modelMatiere.Matieres.afficherMatieres()
				const data2 = await modelProfesseurs.Professeurs.afficherProfesseurs()

				if(data1){
					
					res.render("matieres", {dataMatiere:data1, cookie:req.cookies.role, dataProfesseur:data2})
				
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

	async affichageUneMatiere(req, res){

		if(req.cookies.role == "Principal"){
			
			try{

				const data1 = await modelMatiere.Matieres.afficherUneMatiere(req)
				const data2 = await modelProfesseurs.Professeurs.afficherProfesseurs()
			
				if(data1){
					
					res.render("modifierMatieres", {dataMatiere:data1, cookie:req.cookies.role, dataProfesseur:data2})
				
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

	async ajouterMatiere(req, res){

		try {

			const data = await modelMatiere.Matieres.ajouterMatiere(req)

			if(data){

				res.redirect("/matieres");

			}else{

				console.log("champs incorrects")
				res.redirect("/matieres");
			}

		} catch (error) {

			console.log(error)
		}
	},

	async supprimerMatiere(req, res){

		try {

			const data = await modelMatiere.Matieres.supprimerMatiere(req)

			if(data){

				res.redirect("/matieres");

			}else{

				console.log("champs incorrects")
				res.redirect("/matieres");
			}

		} catch (error) {

			console.log(error)
		}
	},

	async modifierMatiere(req, res){

		try {

			const data = await modelMatiere.Matieres.modifierMatiere(req)

			if(data){

				res.redirect("/matieres");

			}else{

				console.log("champs incorrects")
				res.redirect("/matieres/modifierMatiere/" + req.params.id);
			}

		} catch (error) {

			console.log(error)
		}
	}
}

module.exports = controllerClasse
