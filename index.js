const express = require('express')
const mongoose = require('mongoose')
const itemsRouter = require('./routes/items')
const app = express()
const PORT = 3000

mongoose.Promise = Promise
mongoose.connect('mongodb+srv://admin:admin@cluster0.3fdoy.mongodb.net/ynov?retryWrites=true&w=majority&appName=Cluster0')
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error: '))
db.once('open', () => console.log('status: ', db.states[db._readyState]))

app.use(express.json())
app.use('/api/items', itemsRouter)

//Déclaration de ma route par défault http://localhost:3000/
app.get('/', (req, res) => {
    //Réponse renvoyée par le serveur
    res.send('Welcome on my little API')
})

//Démarrage de mon serveur, mis à l'écoute sur le port 3000
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})