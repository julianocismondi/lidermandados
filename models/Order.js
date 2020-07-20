
const { Schema, model} = require ('mongoose');

const OrderSchema = new Schema({
    ClientId: {type: String},
    CadetId: {type: String},
    VehicleId: {type: String},
    Origin: {type: String, required: true},
    Destination: {type: String, required: true},
    Description: {type:String},
    OrderStatus: {type: Boolean, default: false},
    TypeOfPay: {type: String, required:true},
    Discount: {type: String, default: "Sin descuento" },
    Date:{ type: Date, default: Date.now }

});

module.exports = model('Order', OrderSchema);
