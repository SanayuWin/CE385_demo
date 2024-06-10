const db = require('../config/db');

exports.apiGraphics = async (req, res) => {
    try {
        const { rows } = await db.query('SELECT * FROM style');
        res.json(rows);
        
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
}