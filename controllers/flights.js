const Flight = require('../models/flight')

module.exports = {
    new: newFlight,
    index,
    create
}

function newFlight(req, res){
    res.render('flights/new', { errorMsg: ''})
}

async function index(req, res) {
    const flights = await Flight.find({})
    res.render('flights/index', { flights })
}

async function create(req, res) {
    try {
        await Flight.create(req.body)
        res.redirect('/flights/new')
    } catch (err) {
        console.log(err)
        res.render('flights/new', { errorMsg: err.message })
    }
}