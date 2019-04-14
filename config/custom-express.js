var express = require('express');
var consign = require('consign');

module.exports = () => {
    var app = express();
    consign()
        .include('gateways/http')
        .into(app);
    return app;
};