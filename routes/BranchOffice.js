const express = require('express');
const branchofficeRouter = express.Router();
const passport = require('passport');
const JWT = require('jsonwebtoken');
const BranchOffice = require('../models/BranchOffice');
const Todo = require('../models/Todo');


const signToken = userID => {
    return JWT.sign({
        iss : "NoobCoder",
        sub : userID
    }, "NoobCoder", { expiresIn: "1h"});
}

branchofficeRouter.post('/add', (req, res) => {
    const { name, province, city } = req.body;
    BranchOffice.findOne({ city }, (err, branchoffice)=>{
        if(err)
            res.status(500).json({ message: { msgBody : "Ocurrió un error", msgError : true }});
        if(branchoffice)
            res.status(400).json({ message : { msgBody : "La sucursal ya existe", msgError : true }});
        else {
            const newBranchOffice = new BranchOffice({ name, province, city });
            newBranchOffice.save(err => {
                if(err)
                    res.status(500).json({ message: { msgBody : "Ocurrio un error", msgError : true }});
                else
                res.status(201).json({ message: { msgBody : "Sucursal creada correctamente", msgError : false }});
            });
        };
    });
});

module.exports = branchofficeRouter; 