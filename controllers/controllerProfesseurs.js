const modelProfesseur = require('../models/modelProfesseurs');
const cookieParser = require('cookie-parser')

const controllerClasse = {
	
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
	}
}

module.exports = controllerClasse
