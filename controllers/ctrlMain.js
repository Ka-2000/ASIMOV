const modelAccueil = require('../models/modelAccueil');
const cookieParser = require('cookie-parser')

const controllerMain = {
	
	async controleConnexion(req, res){

		try{

			const data = await modelAccueil.Accueil.connexion(req)
			let messageErreur = ""
			
			if(data[0] != undefined){
				
				res.cookie('role', data[0].professeur_Role)
				res.cookie('id', data[0].professeur_Id)
				res.redirect("http://localhost:3600/accueil")
			
			}else{

				messageErreur = "Le matricule ou le mot de passe est incorrect."
				res.render("connexion", { messageErreur: messageErreur })
			}

		} catch (error) {

			console.log(error)
		}
	},

	affichageAccueil(req, res){

		try {

            res.render("connexion")

		} catch (error) {

			console.log(error)
		}
	},

	deconnexion(req, res){

		try {

			res.clearCookie("role");
			res.clearCookie("id");
			
            res.render("connexion")

		} catch (error) {

			console.log(error)
		}
	}
}

module.exports = controllerMain
