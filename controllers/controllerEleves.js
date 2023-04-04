const modelEleves = require('../models/modelEleves');
const modelClasses = require('../models/modelClasses');
const cookieParser = require('cookie-parser')

const controllerEleve = {
	
	async affichageEleves(req, res){

		if(req.cookies.role == "Principal" || req.cookies.role == "Professeur"){

			try{

				const data1 = await modelEleves.Eleves.afficherEleves()
				const data2 = await modelClasses.Classes.afficherToutesClasses()

				if(data1){
					
					res.render("eleves", {cookie:req.cookies.role, dataEleve:data1, dataClasse:data2})
				
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

    async afficherElevesClasse(req, res){

        if(req.cookies.role == "Principal" || req.cookies.role == "Professeur"){

			try{

				const data1 = await modelEleves.Eleves.afficherElevesClasse(req, res)

				if(data1){
					
					res.render("afficherUneClasse", {cookie:req.cookies.role, dataClasse:data1, idClasse:req.cookies.idClasse})
				
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

    async affichageUnEleve(req, res){

		try {

			const data = await modelEleves.Eleves.afficherUnEleve(req)
            const data2 = await modelClasses.Classes.afficherToutesClasses()
            console.log(data)

			if(data){

				res.render("modifierEleves", {dataEleve: data, dataClasse:data2})

			}else{

				res.render("modifierEleves", {dataEleve: {} })
			}

		} catch (error) {

			console.log(error)
		}
	},

	async ajouterEleve(req, res){

		try {

			const data = await modelEleves.Eleves.ajouterEleve(req)

			if(data){

				res.redirect("/eleves/afficherUneClasse/" + req.cookies.idClasse);

			}else{

				console.log("champs incorrects")
				res.redirect("/eleves");
			}

		} catch (error) {

			console.log(error)
		}
	},

	async supprimerEleve(req, res){

		try {

			const data = await modelEleves.Eleves.supprimerEleve(req)

			if(data){

				res.redirect("/eleves");

			}else{

				console.log("erreur lors de la suppression");
				res.redirect("/eleves");
			}

		} catch (error) {

			console.log(error)
		}
	},

    async modifierEleve(req, res){

		try {

			const data = await modelEleves.Eleves.modifierEleve(req)

			if(data){

				res.redirect("/eleves");

			}else{

				console.log("champs incorrects")
				res.redirect("/eleves/modifierEleve/" + req.params.id);
			}

		} catch (error) {

			console.log(error)
		}
	}
}

module.exports = controllerEleve
