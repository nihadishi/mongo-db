const { books } = require("../models/books");

const booksControllers = {
    getAll: (req,res) =>{
        books.find()
        .limit(10)
        .populate({
          path: "writer",
          populate:{path:"country"}
        })
        .then(data=>{
            res.json(data)
        })

        .catch(err=>{
            res.status(500).json(err)
        })
    },

    getById: (req,res)=>{
        const id = req.params.id

        books.findById(id)
        .populate("writer")
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
            addDate: req.body.addDate,
            writer: req.body.writer,
        })
        bookss.save()
        res.json(bookss)
    },
    deleteById: (req, res) => {
        const id = req.params.id;
        Book.findByIdAndDelete(id)
          .then((data) => {
            res.json(data)
          })
          .catch((err) => {
            res.status(500).json(err)
          });
      }
}

module.exports = {
    booksControllers
}