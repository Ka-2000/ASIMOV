const express = require('express')
const ejs = require('ejs')
const path = require('path')
const port = 3600

const mainRoutes = require('./routes/routesMain.js')
// const missionRoutes = require('./routes/routesMission.js')
// const paiementRoutes = require('./routes/routesPaiement.js')
// const parametreRoutes = require('./routes/routesParametre.js')
const cookieParser = require('cookie-parser')

let app = express()
app.set('view engine', 'ejs')
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'))
app.use(express.static('views'))
app.use(express.static('public'))
app.use(cookieParser())

app.use(express.json());
app.use(express.urlencoded());
app.listen(port, () => console.log('le serveur Epoka est prêt'));

//Définition des routes
app.use('/', mainRoutes)
// app.use('/mission', missionRoutes)
// app.use('/paiement', paiementRoutes)
// app.use('/parametres', parametreRoutes)



