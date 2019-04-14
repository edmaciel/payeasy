var app = require('./config/custom-express')();

app.listen(3000, () => {
    console.log('Server runing on port 3000');
});
