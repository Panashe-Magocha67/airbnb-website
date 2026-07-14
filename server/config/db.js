const mongoose = require('mongoose');
const connectWithDB = () => {
    mongoose.set('strictQuery', false);
    mongoose.connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(console.log('DB  connect successfully'))
    .catch((err) => {
        console.log('DB is failed');
        console.log(err);
        process.exit(1)
    });
    };
module.export = connectWithDB;