const modelClasses = require('../models/modelClasses');
const modelProfesseurs = require('../models/modelProfesseurs');
const cookieParser = require('cookie-parser');

const controllerClasse = {
	
	async affichageMesClasses(req, res){

		if(req.cookies.role == "Professeur"){

			try{

				const data1 = await modelClasses.Classes.afficherMesClasses(req)

				if(data1){
					
					res.render("classes", {dataClasse:data1, cookie:req.cookies.role})
				
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

	async affichageToutesClasses(req, res){

		if(req.cookies.role == "Principal"){
			
			try{

				const data1 = await modelClasses.Classes.afficherToutesClasses()
				const data2 = await modelProfesseurs.Professeurs.afficherProfesseurs()

				if(data1){
					
					res.render("classes", {dataClasse:data1, cookie:req.cookies.role, dataProfesseur:data2})
				
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

	async affichageUneClasse(req, res){

		if(req.cookies.role == "Principal"){
			
			try{

				const data1 = await modelClasses.Classes.afficherUneClasse(req)
				const data2 = await modelProfesseurs.Professeurs.afficherProfesseurs()

				if(data1){
					
					res.render("modifierClasses", {dataClasse:data1, cookie:req.cookies.role, dataProfesseur:data2})
				
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

	async ajouterClasse(req, res){

		try {

			const data = await modelClasses.Classes.ajouterClasse(req)

			if(data){

				res.redirect("/classes/principal");

			}else{

				console.log("champs incorrects")
				res.redirect("/classes");
			}

		} catch (error) {

			console.log(error)
		}
	},

	async supprimerClasse(req, res){

		try {

			const data = await modelClasses.Classes.supprimerClasse(req)

			if(data){

				res.redirect("/classes/principal");

			}else{

				console.log("champs incorrects")
				res.redirect("/classes/principal");
			}

		} catch (error) {

			console.log(error)
		}
	},

	async modifierClasse(req, res){

		try {

			const data = await modelClasses.Classes.modifierClasse(req)

			if(data){

				res.redirect("/classes/principal");

			}else{

				console.log("champs incorrects")
				res.redirect("/classes/modifierClasse/" + req.params.id);
			}

		} catch (error) {

			console.log(error)
		}
	}
}

module.exports = controllerClasse
