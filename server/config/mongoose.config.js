const { mongoose , connect } = require('mongoose');

module.exports.connectMongo = () => {
    connect('mongodb+srv://test:12345@cluster0.ifybok1.mongodb.net/magic_film?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('We are making some connections with the database!!!'))
    .catch(() => console.log('Ohhhh, something went wrong!'));
}

mongoose.set('strictQuery', false);
