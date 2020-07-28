const express = require("express");
const clientRouter = express.Router();
const passport = require("passport");
const Client = require("../models/Client");
const Todo = require("../models/Todo");

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
        res.status(400).json({
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
            res.status(500).json({
              message: { msgBody: "Ocurrió un error", msgError: true },
            });
          else
            res.status(201).json({
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

clientRouter.get(
  "/all",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Client.find((err, clients) => {
      if (err)
        res
          .status(500)
          .json({ message: { msgBody: "Ocurrió un error", msgError: true } });
      else {
        res.status(200).json({ clients, authenticated: true });
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
          res.status(201).json({
            message: {
              msgBody: "Cliente eliminado correctamente",
              msgError: false,
            },
          });
      });
    });
  }
);

clientRouter.put(
  "/:_id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const editClient = req.params;
    const newDataClient = req.body;
    await Client.findById(editClient, (err, client) => {
      client.name = newDataClient.name;
      client.province = newDataClient.province;
      client.city = newDataClient.city;
      client.address = newDataClient.address;
      console.log(client);
      client.save();
    });

    res.send("todo ok");
  }
);
module.exports = clientRouter;
