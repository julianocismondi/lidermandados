const { Schema, model} = require ('mongoose');

const BranchOfficeScheama = new Schema({
    name: {type: String, required:true},
    province: {type:String, required: true},
    city: {type: String, required: true},
    timestamp: {type: Date, default: Date.now}
});

module.exports = model('BranchOffice', BranchOfficeScheama);
