import express from 'express'
import mongoose from 'mongoose'
import routes from './routes/routes.js'
import dotenv from 'dotenv'

// initialisation dotenv
dotenv.config()

// certaines applications imposent le numéro de port (comme Heroku par exemple)
// si process.env.PORT (= numéro de port imposé) n'est pas défini, utiliser le port 3000
const PORT = process.env.PORT || 3000

// initialisation express
const app = express()

// on dit à express qu'il y aura des données en JSON dans les requêtes
app.use(express.json())

// initialisation mongoose
mongoose.connect(process.env.MONGODB)

// on dit à express d'utiliser les routes
app.use(routes)

// on écoute le port
app.listen(PORT, () => {
    console.log(`Server launched on port : ${PORT}`)
})