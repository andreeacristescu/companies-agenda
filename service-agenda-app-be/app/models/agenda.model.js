var mongoose = require('mongoose');

var AgendaSchema = mongoose.Schema({
    name: String,
    phoneNumber: String,
    address: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Agenda', AgendaSchema);