module.exports = app => {
    app.use('/api', require('./api'));

    app.get('/', (req, res) => {
        res.send('<h1>Server Status: [<span style="color: green">OK</span>]</h1>');
    });
}
