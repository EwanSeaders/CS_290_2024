const http = require('http');
const fs = require('fs');
const fetch = require('node-fetch');

fetch('naruto_fillers.html', {
    module: 'GET'
})
    .then(res => res.text())
    .then(text => console.log(text));