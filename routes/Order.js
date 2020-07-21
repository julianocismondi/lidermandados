const express = require('express');
const orderRouter = express.Router();
const passport = require('passport');
const passportConfig = require('../passport');
const JWT = require('jsonwebtoken');
const Order = require('../models/Order');
const Todo = require('../models/Todo');

const signToken = userID => {
    return JWT.sign({
        iss : "NoobCoder",
        sub : userID
    }, "NoobCoder", { expiresIn: "1h"});
}


orderRouter.post('/add', passport.authenticate('jwt', { session : false }), (req, res) => {
    const order = new Order(req.body);
    order.save(err => {
        if(err)
            res.status(500).json({ message: { msgBody : "UnAuthorized", msgError : true}});
        else{
            req.user.save(err => {
                if(err)
                    res.status(500).json({ message: { msgBody : "Ocurrió un error", msgError : true}});
                else
                    res.status(200).json({ message: { msgBody : "Creado correctamente", msgError : false}})
            });
        }
    })
});





module.exports = orderRouter; 