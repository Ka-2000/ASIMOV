const modelAccueil = require('../models/modelConnexion');
const cookieParser = require('cookie-parser')

const controllerMain = {
	
	async controleConnexion(req, res){

		try{

			const data = await modelAccueil.Accueil.connexion(req)
			let messageErreur = ""
			
			if(data[0] != undefined){
				
				res.cookie('role', data[0].professeur_Role)
				res.cookie('id', data[0].professeur_Id)
				res.render("accueil", {dataProfesseur:data[0], cookie:req.cookies.role})
			
			}else{

				messageErreur = "Le matricule ou le mot de passe est incorrect."
				res.render("connexion", { messageErreur: messageErreur })
			}

		} catch (error) {

			console.log(error)
		}
	},

	affichagePageConnexion(req, res){

		try {

            res.render("connexion")

		} catch (error) {

			console.log(error)
		}
	},

	affichageAccueil(req, res){

		try {

            res.render("accueil", {cookie:req.cookies.role})

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
