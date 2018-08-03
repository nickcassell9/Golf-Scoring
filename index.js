const express = require('express');
const bodyParser = require('body-parser');

const store = require('./store');

const app = express();

app.use(express.static('public'))
app.use(bodyParser.json());

app.post('/createUser', (req, res)=>{

    let params = req.body || null;

    store.createUser(params.username, params.password, (err, success)=>{

        res.sendStatus(200)
    })

})


app.listen(7555, ()=>{

    console.log('Server running on http://localhost:7555')
})