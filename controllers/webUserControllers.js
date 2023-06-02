const { WebUser } = require("../models/webUser")

const WebUserControllers = {
    getAll: (req,res) =>{
        WebUser.find()
        .then(data=>{
            res.json(data)
        })

        .catch(err=>{
            res.status(500).json(err)
        })
    },

    getById: (req,res)=>{
        let id = req.params.id;

        WebUser.findById(id)
        .then(data=>{
            if(data) res.json(data)
            else res.status(404).json({'msg': 'Not found'})
        })
        .catch(err=>{
            res.status(500).json(err)
        })    
    },

    add: (req,res) =>{
        let webUser = new WebUser({
            name: req.body.name,
            surname: req.body.surname,
            email: req.body.email,
            password: req.body.password
        })
        webUser.save();
        res.json(webUser);
    }
}

module.exports = {
    WebUserControllers
}