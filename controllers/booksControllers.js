const { books } = require("../models/books");

const booksControllers = {
    getAll: (req,res) =>{
        books.find()
        .then(data=>{
            res.json(data)
        })

        .catch(err=>{
            res.status(500).json(err)
        })
    },

    getById: (req,res)=>{
        let id = req.params.id;

        books.findById(id)
        .then(data=>{
            if(data) res.json(data)
            else res.status(404).json({'msg': 'Not found'})
        })
        .catch(err=>{
            res.status(500).json(err)
        })    
    },

    add: (req,res) =>{
        let bookss = new books({
            name: req.body.name,
            description: req.body.description,
            publishDate: req.body.publishDate,
            addDate: req.body.addDate
        })
        bookss.save();
        res.json(bookss);
    }
}

module.exports = {
    booksControllers
}