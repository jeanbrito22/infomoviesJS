const path = require('path');
const express = require('express');
const app = express();
const HTTP_PORT = 3000;

app.use(express.static('./public'));

// habilitando HTML5MODE
app.all('/*', (req, res) => {
    res.sendFile(path.resolve('public/index.html'));
});

app.listen(3000, () => console.log('Servidor escutando na porta: %PORT%'.replace("%PORT%", HTTP_PORT)));


