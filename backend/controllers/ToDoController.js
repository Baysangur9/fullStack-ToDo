const ToDoModel = require('../models/ToDoModel')

module.exports.getToDo = async(req, res) => {
    const todo = await ToDoModel.find()
    res.send(todo)
}

module.exports.saveToDo = async(req, res) => {
    const {text} = req.body

    ToDoModel
     .create({text})
     .then((data) =>{
        console.log("Added Successfyly")
        console.log(data)
        res.json(data)
     })

     .catch((err) => console.log(err))
}

module.exports.deleteToDo = async(req, res) => {

    const {_id} = req.body

    ToDoModel
      .findByIdAndDelete(_id)
      .then(() => res.set(201).send("Deleted Successfyly"))
      .catch((err) => console.log(err))

}


module.exports.updateToDo = async(req,res) => {

    const {_id, text} = req.body

    ToDoModel
     .findByIdAndUpdate(_id, {text})
     then(() => res.set(201).send("Updated Successfyly"))
     .catch((err) => console.log(err))
}