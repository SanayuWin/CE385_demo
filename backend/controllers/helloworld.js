const db = require('../config/db');


exports.apiHelloWorld = async (req, res) => {
    try {
        res.status(200).json({ 
            msg: `Hello World` 
        });


    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
}