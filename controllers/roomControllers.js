import RoomModel from '../models/roomModel.js'

// Create
export const addRoom = async (req, res) => {
    try {
        // récupère les données envoyées en fonction du modèle
        const room = await new RoomModel(req.body)
        // sauvegarde dans MongoDB
        await room.save()
        res.status(201).send("Room created")
    } catch (err) {
        res.status(500).send(err)
    }
}

// Read All
export const getRooms = async (_, res) => {
    try {
        // recherche les objets par rapport à un modèle
        const rooms = await RoomModel.find({})
        // await RoomModel.find({ name:'bathroom' }) -> recherche les rooms qui ont comme nom 'bathroom'
        res.status(200).send(rooms)
    }
    catch (err) {
        res.status(500).send(err)
    }

}

// Read One
export const getRoom = async (req, res) => {
    try {
        // recherche un objet par rapport à un modèle
        const room = await RoomModel.find({ _id: req.params.id })
        res.status(200).send(room)
    }
    catch (err) {
        res.status(500).send(err)
    }

}

// Update
export const updateRoom = async (req, res) => {
    try {
        const room = await RoomModel.findByIdAndUpdate(req.params.id, req.body)
        await room.save()
        res.status(201).send("Room updated")
    }
    catch (err) {
        res.status(500).send(err)
    }
}

// Delete
export const deleteRoom = async (req, res) => {
    try {
        const room = await RoomModel.findByIdAndDelete(req.params.id)
        res.status(201).send("Room deleted")
    }
    catch (err) {
        res.status(500).send(err)
    }
}