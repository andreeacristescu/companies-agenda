module.exports = (function() {
    const route = require('express').Router();
    const agendas = require('../controllers/agenda.controller.js');
    route.get('/pub', function(req, res) {
        res.end();
    });

    // Create a new Note
    route.post('/agendas', agendas.create);

    // Retrieve all Notes
    route.get('/agendas', agendas.findAll);

    // Retrieve a single Agenda with agendaId
    route.get('/agendas/:agendaId', agendas.findOne);

    // Update a Agenda with agendaId
    route.put('/agendas/:agendaId', agendas.update);

    // Delete a Agenda with agendaId
    route.delete('/agendas/:agendaId', agendas.delete);

    return route;
})();