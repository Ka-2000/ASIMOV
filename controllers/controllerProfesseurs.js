const modelProfesseur = require('../models/modelProfesseurs');
const cookieParser = require('cookie-parser')

const controllerProfesseur = {
	
	async affichageProfesseurs(req, res){

		if(req.cookies.role == "Principal"){

			try{

				const data1 = await modelProfesseur.Professeurs.afficherProfesseurs()

				if(data1){
					
					res.render("professeurs", {dataProfesseur:data1})
				
				}else{

					console.log("problème de récupération")
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

    async affichageUnProfesseur(req, res){

		try {

			const data = await modelProfesseur.Professeurs.afficherUnProfesseur(req)

			if(data){

				res.render("modifierProfesseurs", {dataProfesseur: data})

			}else{

				res.render("modifierProfesseurs", {dataProfesseur: {} })
			}

		} catch (error) {

			console.log(error)
		}
	},

	async ajouterProfesseur(req, res){

		try {

			const data = await modelProfesseur.Professeurs.ajouterProfesseur(req)

			if(data){

				res.redirect("/professeurs");

			}else{

				console.log("champs incorrects")
				res.redirect("/professeurs");
			}

		} catch (error) {

			console.log(error)
		}
	},

	async supprimerProfesseur(req, res){

		try {

			const data = await modelProfesseur.Professeurs.supprimerProfesseur(req)

			if(data){

				res.redirect("/professeurs");

			}else{

				console.log("erreur lors de la suppression");
				res.redirect("/professeurs");
			}

		} catch (error) {

			console.log(error)
		}
	},

    async modifierProfesseur(req, res){

		try {

			const data = await modelProfesseur.Professeurs.modifierProfesseur(req)

			if(data){

				res.redirect("/professeurs");

			}else{

				console.log("champs incorrects")
				res.redirect("/professeurs/modifierProfesseur/" + req.params.id);
			}

		} catch (error) {

			console.log(error)
		}
	}
}

module.exports = controllerProfesseur
