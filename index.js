const express = require('express')
const ejs = require('ejs')
const path = require('path')
const port = 3600

const connexionRoutes = require('./routes/routesConnexion.js')
const classeRoutes = require('./routes/routesClasse.js')
const professeurRoutes = require('./routes/routesProfesseur.js')
const matiereRoutes = require('./routes/routesMatiere.js')

const cookieParser = require('cookie-parser')

let app = express()
app.set('view engine', 'ejs')
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'))
app.use(express.static('views'))
app.use(express.static('public'))
app.use(cookieParser())

app.use(express.json());
app.use(express.urlencoded());
app.listen(port, () => console.log('le serveur Asimov est prêt'));

//Définition des routes
app.use('/', connexionRoutes)
app.use('/classes', classeRoutes)
app.use('/professeurs', professeurRoutes)
app.use('/matieres', matiereRoutes)




