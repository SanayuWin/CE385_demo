const db = require('../config/db');

exports.apiQRCode = async (req, res) => {
    try {
        const result = await db.query('SELECT link FROM style ORDER BY RANDOM() LIMIT 1');
        const urlData = result.rows[0].link; 
        res.status(200).json({ 
            msg: urlData
        });

    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
}