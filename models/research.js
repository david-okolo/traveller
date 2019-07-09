const mongoose = require('mongoose');


const researchSchema = mongoose.Schema({

    countryName: {
        type: String
    },

    visaTypes:{
        type: Array
    },

    visaRequirements:{
        type: Array
    },

    travelRoutes:{
        type: Array
    },

    flights:{
        type: Array
    },

    averageFlightPrice:{
        type: Number
    },

    address:{
        type: Array
    },

    applicationLink:{
        type: String
    }

})

const research = module.exports = mongoose.model('research', researchSchema);

module.exports.addResearch = function(newResearch, callback){
    newResearch.save(callback);
}

module.exports.getResearch = function(callback){
    research.find(callback);
}

module.exports.getResearchById = function(id, callback){
    research.findOne({_id: id}, callback);
}

module.exports.getResearchByName = function(name, callback){
    research.findOne({countryName: name}, callback);
}

module.exports.updateResearchById = function(id, newResearch, callback){
    research.updateOne({_id: id}, newResearch, callback)
}

module.exports.deleteResearchById = function(id, callback){
    research.findOneAndDelete({_id: id}, callback);
}