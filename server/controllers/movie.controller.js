const Movie = require("../models/movie.model");

module.exports.getMovieList = async (req, res) => {
    try {
        const movieList = await Movie.find();
        res.json({
            message: 'Se entregan de manera exitosa todos las peliculas',
            movieList,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Ups! no hemos podido hacer lo que nos solicitaste',
            error,
        });
    };
}

module.exports.getOneMovie = async (req, res) => {
    try {
        const { id } = req.params;
        const movie = await Movie.findById(id);
        res.json({
            message: 'Se trae de manera exitosa la información de la pelicula',
            movie,
        })
    } catch (error) {
        res.status(500).json({
            message: 'Ups! no hemos podido hacer lo que nos solicitaste',
            error,
        });
    }
}

module.exports.createMovie = async (req, res) => {
    try {
        let entity = await Movie.find( { "name": req.body.name } );
        if (entity.length !== 0) {
            throw new Error('La pelicula ya existe');
        }
        const newMovie = await Movie.create(req.body);
        res.json({
            message: 'Se crea de manera exitosa la pelicula',
            newMovie,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Ups! no hemos podido hacer lo que nos solicitaste',
            error: error.message,
        });
    }
}

module.exports.updateMovie = async (req, res) => {
    try {
        const { params, body } = req;
        const { id } = params;
        const updatedMovie = await Movie.findByIdAndUpdate(id, body, { new: true });
        res.json({
            message: 'Se actualiza de manera exitosa la información',
            updatedMovie,
        });
        
    } catch (error) {
        res.status(500).json({
            message: 'Ups! no hemos podido hacer lo que nos solicitaste',
            error,
        });
    }
}

module.exports.removeMovie = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedMovie = await Movie.deleteOne({ _id: id });
        res.json({
            message: 'Se actualiza de manera exitosa la información de la pelicula',
            deletedMovie,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Ups! no hemos podido hacer lo que nos solicitaste',
            error,
        });
    }
}
