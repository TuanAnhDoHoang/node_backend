const mongoose = require('mongoose');
async function connect() {
    try {
        (await mongoose.connect('mongodb://172.28.240.1:27017/education_dev')).then(() => {
            console.log('connection sucessfully!!');
        });
    } catch (error) {
        console.log('connection falure');
    }
}

module.exports = { connect };
