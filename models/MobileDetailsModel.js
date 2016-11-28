var mongoose = require('mongoose');
console.log("heheh");
var MobileDetailsSchema = new mongoose.Schema({
    name : String,
    model : String,
    contactNumber : String,
    fullAddressInfo : String,
    estInfo : String,
    rating : String,
    workInfo : String
});
var ParticularTailorDetailSchema = new mongoose.Schema({
    name : String,
    model : String,
    contactNumber : String,
    fullAddressInfo : String,
    estInfo : String,
    rating : String,
    workInfo : String
});

module.exports = {
    tailorInfoModel : mongoose.model("Person", MobileDetailsSchema, 'TailorDetailsList'),
    particularTaiorDetials : mongoose.model("ParticularTailorDetails", ParticularTailorDetailSchema, 'TailorDetailsList')
}