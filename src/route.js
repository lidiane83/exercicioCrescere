const routes = require('express').Router();

const myController = require ("./app/controllers/controller");

routes.post("/soma", myController.soma);

routes.post("/pessoa", myController.pessoa);
routes.get("/parimpar/:numero", myController.parImpar);

module.exports = routes; 