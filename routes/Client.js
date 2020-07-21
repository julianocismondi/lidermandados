const express = require("express");
const clientRouter = express.Router();
const passport = require("passport");
const Client = require("../models/Client");
const Todo = require("../models/Todo");
const _ = require("underscore");

clientRouter.post(
  "/add",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { name, province, city, address } = req.body;
    Client.findOne({ name }, (err, client) => {
      if (err)
        res
          .status(500)
          .json({ message: { msgBody: "Ocurrió un error", msgError: true } });
      if (client)
        res
          .status(400)
          .json({
            message: {
              msgBody:
                "Ya se encuentra registrado un cliente con el mismo nombre",
              msgError: true,
            },
          });
      else {
        const newClient = new Client({ name, province, city, address });
        newClient.save((err) => {
          if (err)
            res
              .status(500)
              .json({
                message: { msgBody: "Ocurrió un error", msgError: true },
              });
          else
            res
              .status(201)
              .json({
                message: {
                  msgBody: "Cliente registrado correctamente",
                  msgError: false,
                },
              });
        });
      }
    });
  }
);

clientRouter.delete(
  "/:_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const clientId = req.params;

    Client.findById(clientId, (err, client) => {
      client.remove((err) => {
        if (err)
          res
            .status(500)
            .json({ message: { msgBody: "Ocurrió un error", msgError: true } });
        else
          res
            .status(201)
            .json({
              message: {
                msgBody: "Cliente elim correctamente",
                msgError: false,
              },
            });
      });
    });
  }
);
module.exports = clientRouter;
