const express = require('express');
const router = express.Router();

const Item = require('../models/Item');

router.get('/items', (req, res, next) => {
    Item.find((err, items) => {
        if(err){
            res.json(err);
        } else {
            res.json(items);
        }
    });
});

router.post('/item', (req, res, next) => {
    let newItem = new Item({
        name: req.body.name,
        type: req.body.type,
        guacamole: req.body.guacamole,
        sellInfo: req.body.sellInfo,
        datePicker: req.body.datePicker
    });
    
    newItem.save((err, item) => {
        if(err){
            res.json(err);
        } else {
            res.json({msg: 'Item has been added successfully'});
        }
    });
});

router.delete('/item/:id', (req, res, next) => {
    Item.remove({
        _id: req.params.id
    }, (err, result) => {
        if(err){
            res.json(err);
        } else {
            res.json(result);
        }
    });
});

module.exports = router;