const modelAccueil = require('../models/modelConnexion');
const cookieParser = require('cookie-parser')

const controllerMain = {
	
	//Fonction pour tout utilisateur : permet une connexion si correspondance dans la base, sinon renvoit un message d'erreur
	async controleConnexion(req, res){

		try{

			const data = await modelAccueil.Accueil.connexion(req)
			const data2 = await modelAccueil.Accueil.connexion2(req)
			let messageErreur = ""
			
			if(data[0] != undefined){
				
				res.cookie('role', data[0].professeur_Role)
				res.cookie('id', data[0].professeur_Id)
				res.render("accueil", {dataProfesseur:data[0], cookie:data[0].professeur_Role})
			
			}else if(data2[0] != undefined){

				res.cookie('role', 'Eleve')
				res.cookie('id', data2[0].eleve_Id)
				res.render("accueil", {dataEleve:data2[0], cookie:'Eleve', id:data2[0].eleve_Id})

			}else{

				messageErreur = "Le matricule ou le mot de passe est incorrect."
				res.render("connexion", { messageErreur: messageErreur })
			}

		}catch(error){

			console.log(error)
		}
	},

	//Fonction pour tout utilisateur : permet d'afficher la page de connexion
	affichagePageConnexion(req, res){

		try{

            res.render("connexion")

		}catch(error){

			console.log(error)
		}
	},

	//Fonction pour tout utilisateur identifié : permet d'afficher la page d'accueil, le cookie rôle permettra d'afficher une navbar personnalisée
	affichageAccueil(req, res){

		try{

            res.render("accueil", {cookie:req.cookies.role})

		}catch(error){

			console.log(error)
		}
	},

	//Fonction pour tout utilisateur identifié : permet de se déconnecter en supprimant tous les cookies de session
	deconnexion(req, res){

		try{

			res.clearCookie("role");
			res.clearCookie("id");
			res.clearCookie("idEleve");
			res.clearCookie("idClasse");
			
            res.render("connexion")

		}catch(error){

			console.log(error)
		}
	}
}

module.exports = controllerMain
