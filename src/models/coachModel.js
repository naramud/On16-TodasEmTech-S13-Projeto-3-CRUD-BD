const mongoose = require ('mogoose')

//name, tema, Insígnia, pokemons, region, age, trofel, gender

const coachSchema = mongoose.Shema({
    id: {
        type: mongoose.Schema.Types.objectId,
        // mongosse.Schema.Types.objectId
        default: mongoose.Types.objectId
    },

    name: {
        type: String, // "" --> representa texto
        require: true, // esse campo é obrigatorio 
        unique: true, // eu digo que não aceito mais de um nome no sistema igual
    },

    team: String, 

    region: {
        type: String,
        require: true
    },

    age: {
        type: Number,
        require: true
    },

    gender:{
        type: String,
        default: "Não Informado."
    }


}, {timestamps: true }) // gera automaticamente as datas de autolização

const Model = mongoose.model('coach', coachSchema)

module.exports = Model