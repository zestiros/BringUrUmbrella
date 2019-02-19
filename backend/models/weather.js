import mongoose, { Schema } from 'mongoose';

// Define movie schema
var weatherSchema = new Schema({
  id:{
      type : Number,
      unique:true
  }
});

// Export Mongoose model
export default mongoose.model('weather', weatherSchema);