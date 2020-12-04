const PhotoLibrary = require('./models')

module.exports = {
    GetAll : (req,res) => PhotoLibrary.find({})
                        .then(data=>console.log("Get All success") || res.json(data))
                        .catch(errs => console.log("Get All error") || res.json(errs)),
    Create : (req,res) =>PhotoLibrary.create(req.body)
                        .then(data=>console.log("Create success") || res.json(data))
                        .catch(errs =>console.log("Create errors") || res.json(errs)),
    Edit : (req,res) =>PhotoLibrary.findOneAndUpdate({_id: req.params.main_id}, req.body, {new : true, runValidators:true})
                        .then(data=>console.log("Edit success") || res.json(data))
                        .catch(errs=>console.log("Edit errors") || res.json(errs)),
    GetOne: (req,res) =>PhotoLibrary.findOne({_id:req.params.main_id})
                        .then(data=>console.log("Get one success")|| res.json(data))
                        .catch(errs=>console.log("get one error") || res.json(errs)),
    Delete:(req,res) =>PhotoLibrary.findOneAndRemove({_id:req.params.main_id})
                        .then(data=>console.log("Delete success") || res.json(data))
                        .catch(errs=>console.log("Delete errors") || res.json(errs))
}