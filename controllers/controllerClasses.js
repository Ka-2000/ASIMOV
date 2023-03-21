const modelClasses = require('../models/modelClasses');
const cookieParser = require('cookie-parser')

const controllerClasse = {
	
	async affichageClasse(req, res){

		if(req.cookies.role == "Professeur"){

			try{

				const data1 = await modelClasses.Classes.afficherClasses(req)

				if(data1){
					
					res.render("classes", {dataClasse:data1})
				
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
