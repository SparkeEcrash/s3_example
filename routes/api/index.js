const router = require('express').Router();
const { test } = require('../../controllers/api');

router.get('/test', test);

module.exports = router;
