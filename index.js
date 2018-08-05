const express = require('express');
const bodyParser = require('body-parser');
const app = express();
let routes =require('./server/routes');
app.use(express.static('public'));
// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true, limit: '200mb'}));
app.use(bodyParser.json({limit: '200mb'}));
app.use(bodyParser.raw({limit: '200mb'}));


const userCnt = require('./server/user/controller');
// app.post('/user', userCnt.createUser())




routes.init(app)

// app.get('/', function (req, res) {
//     res.redirect('/home');
// });
//


app.listen(7555, ()=>{

    console.log('Server running on http://localhost:7555')
})

