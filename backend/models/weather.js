
const mongoose=require('mongoose')
// Define movie schema
var weatherSchema = new mongoose.Schema({
  
  "city":{
    "id":{type: Number , unique:true},
    "name":{type:String},
    "coord":{
    "lat":{type:Number},
    "lon":{type:Number}
    },
    "country":{type:String}
    }
},{ strict: false });


// Export Mongoose model
module.exports=mongoose.model('weather', weatherSchema);