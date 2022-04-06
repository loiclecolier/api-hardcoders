import express from 'express'
import { addRoom, getRooms, getRoom, updateRoom, deleteRoom } from '../controllers/roomControllers.js'
// import { catchErrors } from '../helpers.js'

// création d'un router
const router = express.Router()

// Path avec ES module
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Méthodes CRUD de requête HTTP
    // GET : récupérer des données (read)
    // POST : envoyer des données (create)
    // PUT : modifier en remplaçant entièrement les données (update)
    // PATCH : modifier en remplaçant partiellement les données (update)
    // DELETE : supprimer des données (delete)

router.post('/api/rooms', addRoom) // ou catchErrors(addRoom) pour gérer les erreurs avec le helper
router.get('/api/rooms', getRooms)
router.get('/api/rooms/:id', getRoom)
router.patch('/api/rooms/:id', updateRoom)
router.delete('/api/rooms/:id', deleteRoom)

// si aucune route ne correspond à l'API -> renvoyer vers l'app react
router.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'))
})

// export du router
export default router