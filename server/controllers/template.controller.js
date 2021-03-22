const Template = require("../models/template.model");


module.exports = {
    index : (req,res) => {
        Template.find()
            .then(data => res.json({results:data}))
            .catch(err => res.status(404).json({errors: err.errors}))
    },
    create : (req,res) => {
        Template.create(req.body)
            .then(data => res.json({results:data}))
            .catch(err => res.status(404).json({errors: err.errors}))
    },
    random : (req,res) => {
        Template.find()
            .then(jokes => {
                let random = Math.floor(Math.random() * jokes.length);
                res.json({results: jokes[random]})
            })
            .catch(err => res.status(404).json({errors: err.errors}))
    },
    show : (req,res) => {
        Template.find({_id: req.params.id})
            .then(data => res.json({results:data}))
            .catch(err => res.status(404).json({errors: err.errors}))
    },
    update : (req,res) => {
        Template.updateOne({_id:req.params.id}, req.body, {runValidators:true, new:true})
            .then(data => res.json({results:data}))
            .catch(err => res.status(404).json({errors: err.errors}))
    },
    destroy: (req,res) => {
        Template.deleteOne({_id:req.params.id})
            .then(data => res.redirect(303, '/api/templates'))
            .catch(err => res.status(404).json({errors: err.errors}))
    }
}