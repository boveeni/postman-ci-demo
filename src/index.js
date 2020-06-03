const express = require('express'),
app = express(),
port = process.env.PORT || 3000
bodyParser = require('body-parser'),
random = require('./randomName')

/** Add body parser middleware */
app.use(bodyParser.json())

/** GET /server-name for a random server name */
app.get('/server-name', (req, res) => {
    res.send({name: random.getRandomName()})
})

/** POST /server-name to post a new word into the collection */
app.post('/server-name', (req, res) => {
    if(req.body.hasOwnProperty("newWord") && req.body.hasOwnProperty("type")){
        res.send({newWord: `${req.body.newWord}`, type: `${req.body.type}`})
    } else {
        res.status(500)
        res.send({error: "Invalid request body"})
    }
})

/** Start the server */
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))


