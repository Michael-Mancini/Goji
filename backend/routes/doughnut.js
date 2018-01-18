const express = require('express');
const router = express.Router();

const Doughnut = require('../models/Doughnut');

router.get('/doughnuts', (req, res, next) => {
    Doughnut.find((err, items) => {
        if(err){
            res.json(err);
        } else {
            res.json(items);
        }
    });
});

router.post('/doughnutPost', (req, res, next) => {
	let newDoughnut = new Doughnut({
        grayish: 1,
        peach: 1,
        teal: 1,
        brown: 1
	});
	newDoughnut.save((err, item) => {
		if(err){
			res.json(err);
		} else {
			res.json({msg: 'Doughnut added'});
		}
	});
});


router.put('/doughnut/:id', (req, res, next) => {
    Doughnut.findOneAndUpdate({_id: req.params.id}, {
        $set: {
            grayish: req.body.grayish,
            peach: req.body.peach,
            teal: req.body.teal,
            brown: req.body.brown
        }
    }, (err, result) => {
        if(err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
});

router.delete('/donotdelete', (req, res, next) => {
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