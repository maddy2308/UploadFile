var exports = module.exports = {};
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

exports.ArtUploadSchema = new Schema({
  uniqueName : String,
  artName: String,
  artistName : String,
  artType: String,
  description: String,
  rating: Number,
  likes: Number,
  sellingPrice: Number,
  sellingSince: Date,
  uploadedImages: []
//{
//  imageData : Buffer,
//      imageName : String,
//    fileName : String,
//    path : String,
//    size : Number
//}
});
