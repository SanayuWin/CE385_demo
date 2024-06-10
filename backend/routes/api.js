const express = require('express');
const router = express.Router();
const apiQRCode = require('../controllers/qrcode');
const apiHelloWorld = require('../controllers/helloworld');
const apiGraphics = require('../controllers/graphics');
const apiGenerate = require('../controllers/generate');


router.get('/qrcode', apiQRCode.apiQRCode);
router.get('/helloworld', apiHelloWorld.apiHelloWorld);
router.get('/graphics', apiGraphics.apiGraphics);
router.get('/generate', apiGenerate.apiGenerate);

module.exports = router;
