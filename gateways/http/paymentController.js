module.exports = (app) => {
    app.get('/payments', (req, res) => {
        console.log('received request req');
        res.send('OK!');
    });
}
