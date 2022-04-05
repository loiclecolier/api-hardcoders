import mongoose from 'mongoose'

// création du schéma Room
const RoomSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true, // supprime les espaces en trop
        lowercase: true // transforme string en minuscule
    },
    maxPersons: {
        type: Number,
        default: 1,
        validate: value => {
            if (value <= 0) {
                throw new Error('The room must be able to accommodate at least one person')
            }
        }
    }
})

// création du modèle (basé sur un schéma)
const Room = mongoose.model('Room', RoomSchema)

// export du modèle
export default Room