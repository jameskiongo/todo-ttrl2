const router = require('express').Router();

const todoItemsModel = require('../models/todoItems');

router.post('/api/item', async (req, res) => {
    try {
        const newItem = new todoItemsModel({
            item: req.body.item
        })
        //save
        const saveItem = await newItem.save();
        res.status(200).json(saveItem)
    } catch (error) {
        res.json(error)
    }
});
router.get("/api/items", async (req, res) => {
    try {
        const allTodoItems = await todoItemsModel.find({});
        res.status(200).json(allTodoItems);
    } catch (err) {
        res.json(err)
    }
});
router.delete('/api/item/:id', async (req, res) => {
    try {
        const deleteItem = await todoItemsModel.findByIdAndDelete(req.params.id)
    } catch (error) {
        res.json(error)
    }
})
router.put('/api/item/:id', async (req, res) => {
    try {
        //find by id and update
        const updateItem = await todoItemsModel.findByIdAndUpdate(req.params.id, { $set: req.body });
        res.status(200).json('Item updated');
    } catch (error) {
        res.status(error)
    }
})
module.exports = router;