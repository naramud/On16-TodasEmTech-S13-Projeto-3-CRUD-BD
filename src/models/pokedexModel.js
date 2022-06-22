const mongoose = require ('mongoose')

const PokedexSchema = mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },
    name: {
        type: String,
        required: true,

    },

    type: {
        type: [String],
        required: true,
    },

    abilities: {
        type: [String],
        required: true

    },

    coach: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'coach'
    }

}, {timesTamps: true})

const Model = mongoose.model('pokedex', PokedexSchema)


module.exports = Model