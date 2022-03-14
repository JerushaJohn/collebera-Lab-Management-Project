const mongoose = require('mongoose');
require('dotenv').config();

const dburl = process.env.DATABASEURL


mongoose.connect(dburl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, (err) => {
    if (err) {
        console.log("DataBase connection FAILED", err);
    }
    else {
        console.log(" DB Connected ");
    }
}

)
