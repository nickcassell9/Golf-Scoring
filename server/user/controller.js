const userSvc = require('server/user/service');

module.exports = {
    createUser,
    authenticate

}

function createUser(req, res){

    let params = getParams(req);
    console.log('hey')

    userSvc.createUser(params.email, params.password, params.first_name, params.last_name, (err, success)=>{
        if(err){
            console.log('err', err)
            return res.json({error: err})
        }

       return res.sendStatus(200)
    })

}


function authenticate(req, res){

    let params = getParams(req);
        userSvc.authenticate(params.email, params.password, (err, success)=>{

            if(err){
               return res.sendStatus(401)
            }

            return res.sendStatus(200)

        })
}


function getParams(req){

    if(!req){
        return {};
    }
    return req.body || {};
}

