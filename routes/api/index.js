const router = require('express').Router();
const { getImages, prepUpload, saveImage, test } = require('../../controllers/api');

router.get('/get-images', getImages);

router.get('/prep-upload', prepUpload);

router.post('/save-image', saveImage);

router.get('/test', test);

module.exports = router;
