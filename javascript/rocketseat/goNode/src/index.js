const express = require('express');

const app = express();

app.get('/', (req, res) => {
    return res.json({
        message: 'Hello World'
    })
})


//Always created an application in node it's necessary to say where the application will be listening
app.listen(3000);

