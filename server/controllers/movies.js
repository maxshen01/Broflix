const Movies = require('../models/Movies')

const index = async (req, res) => {
    try {
        const movies = await Movies.getAll()
        res.status(200).json(movies)
    } catch (err) {
        res.status(500).json({error: err.message})
    }
}

module.exports = {
    index
}