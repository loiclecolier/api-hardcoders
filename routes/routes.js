import express from 'express'
import { addRoom, getRooms, getRoom, updateRoom, deleteRoom } from '../controllers/roomControllers.js'
// import { catchErrors } from '../helpers.js'

// création d'un router
const router = express.Router()

// Méthodes CRUD de requête HTTP
    // GET : récupérer des données (read)
    // POST : envoyer des données (create)
    // PUT : modifier en remplaçant entièrement les données (update)
    // PATCH : modifier en remplaçant partiellement les données (update)
    // DELETE : supprimer des données (delete)

router.post('/room', addRoom) // ou catchErrors(addRoom) pour gérer les erreurs avec le helper
router.get('/rooms', getRooms)
router.get('/room/:id', getRoom)
router.patch('/room/:id', updateRoom)
router.delete('/room/:id', deleteRoom)

// export du router
export default router