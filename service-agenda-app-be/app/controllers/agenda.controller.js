const Agenda = require('../models/agenda.model.js');


exports.create = function(req, res) {
    // Create and Save a new Agenda
    console.log(req.body);
    if(!req.body.address) {
        res.status(400).send({message: "Agenda can not be without an address"});
    }
    const agenda = new Agenda({name: req.body.name || "Untitled Agenda", phoneNumber: req.body.phoneNumber, address: req.body.address});

    agenda.save(function(err, data) {
        console.log(data);
        if(err) {
            console.log(err);
            res.status(500).send({message: "Some error occurred while creating the Agenda."});
        } else {
            res.send(data);
        }
    });
};

exports.findAll = function(req, res) {
    // Retrieve and return all agendas from the database.
    Agenda.find(function(err, notes){
        if(err) {
            res.status(500).send({message: "Some error occurred while retrieving agendas."});
        } else {
            res.send(notes);
        }
    });
};

exports.findOne = function(req, res) {
    // Find a single agenda with an agendaId
    Agenda.findById(req.params.agendaId, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not retrieve agenda with id " + req.params.agendaId});
        } else {
            res.send(data);
        }
    });
};

exports.update = function(req, res) {
    // Update an agenda identified by the agendaId in the request
    Agenda.findById(req.params.agendaId, function(err, agenda) {
        if(err) {
            res.status(500).send({message: "Could not find an agenda with id " + req.params.agendaId});
        }

        agenda.name = req.body.name;
        agenda.phoneNumber = req.body.phoneNumber;
        agenda.address = req.body.address;

        agenda.save(function(err, data){
            if(err) {
                res.status(500).send({message: "Could not update agenda with id " + req.params.agendaId});
            } else {
                res.send(data);
            }
        });
    });

};

exports.delete = function(req, res) {
    // Delete an agenda with the specified agendaId in the request
    Agenda.findOneAndRemove({_id: req.params.agendaId}, function(err, data) {
        console.log(data);
        if(err) {
            res.status(500).send({message: "Could not delete agenda with id " + req.params.id});
        }
        else if(data === null){
            res.send({message: "Agenda was already deleted!"})
        }
        else {
            res.send({message: "Agenda deleted successfully!"})
        }
    });
};