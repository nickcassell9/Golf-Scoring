const courseSvc = require('server/course/service');

module.exports = {
    createCourse,

};

function createCourse(req, res){

    let params = getParams(req);

    courseSvc.createCourse(params, (err, success)=>{
        if(err){
            return res.json({error: err})
        }

        return res.json({success})
    })

}



function getParams(req){

    if(!req){
        return {};
    }
    return req.body || {};
}

