const db = require('../db');

exports.test = (req, res) => {
    res.send({
        success: true,
        message: 'Test API working'
    });
}
