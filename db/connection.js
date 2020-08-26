const mongoose = require('mongoose');

let MONGODB_URI = ''
if(process.env.NODE_ENV === 'production') {
    // DB_URL will be used by Heroku to connect to Mongo Atlas DB
    MONGODB_URI = process.env.DB_URL
} else {
    MONGODB_URI = 'mongodb://127.0.0.1:27017/ideateDatabase'
}

mongoose
    .connect(MONGODB_URI, { 
        useUnifiedTopology: true, 
        useNewUrlParser: true, 
        useFindAndModify: false  })
    .then(() => {
        console.log('Successfully connected to MongoDB.')
    })
    .catch(e => {
        console.error('Connection error', e.message)
    })

module.exports = mongoose;