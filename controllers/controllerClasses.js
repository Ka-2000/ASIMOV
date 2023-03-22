const modelClasses = require('../models/modelClasses');
const cookieParser = require('cookie-parser')

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

			console.log(req.cookies.role)
			try{

				const data1 = await modelClasses.Classes.afficherToutesClasses()

				if(data1){
					
					res.render("classes", {dataClasse:data1, cookie:req.cookies.role})
				
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
	}
}

module.exports = controllerClasse
