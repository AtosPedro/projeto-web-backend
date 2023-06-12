const mongoose = require('mongoose');

mongoose.connect(
    'mongodb://localhost:27017',
    { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(()=>console.log('connectect sucessfully'))
    .catch((err)=> console.log(err) );

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = mongoose;