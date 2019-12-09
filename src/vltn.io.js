const express = require('express');
const app = express();
const path = require('path');

app.set('port', process.env.PORT || 3000);

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '/views/index.html'));
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), ()=>{
    console.log('server on port', app.get('port'));
});