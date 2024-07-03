const db = require('../config/db');

exports.apiQRCode = async (req, res) => {
    try {
        const result = await db.query('SELECT link FROM style ORDER BY RANDOM() LIMIT 1');
        const urlData = result.rows[0].link; 
        const base64String = Buffer.from(urlData).toString('base64');
        res.status(200).json({ 
            msg: base64String
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
}