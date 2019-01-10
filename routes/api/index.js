const router = require('express').Router();

router.get('/test', (req, res) => {
    res.send({
        success: true,
        message: 'API test endpoint'
    });
});

module.exports = router;
