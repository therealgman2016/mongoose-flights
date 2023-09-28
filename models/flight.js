const mongoose = require('mongoose')
const Schema = mongoose.Schema


const destinationSchema = new Schema({
    airport: {
        type: String,
        enum : ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
        default: 'DEN'
    },
    
    arrival: String

})


const flightSchema = new Schema({
    airline: {
        type: String,
        enum : ['American', 'Southwest', 'United']
    },
    
    flightNo: {
        type: Number,
        min: 10,
        max: 9999
    },

    departs: String,

    destination: [destinationSchema]

}, { timestamps: true }
)

module.exports = mongoose.model('Flight', flightSchema)