const { mongoose , connect } = require('mongoose');

module.exports.connectMongo = () => {
    connect('mongodb://localhost/magic_film', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('We are making some connections with the database!!!'))
    .catch(() => console.log('Ohhhh, something went wrong!'));
}

mongoose.set('strictQuery', false);
