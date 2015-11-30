var express = require("express");
var multer = require('multer');
var cors = require('cors');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var fs = require('fs');
var externalArtUploadJs = require("./Model/ArtUpload.js");

app.use(express.static(__dirname + '/public'));
app.use(cors());
app.use(bodyParser.json());

/* Configure the database*/
mongoose.connect('mongodb://localhost/ArtGalleryUpload');
var artModel = mongoose.model('ArtInformation', externalArtUploadJs.ArtUploadSchema);

/*Configure the multer.*/
app.use(multer({dest: './uploads/'}).array('uploadedData'));

/*Run the server.*/
app.listen(3000);

app.post('/Art/upload', function (req, res) {
  var artData = JSON.parse(req.body.artData);
  artData.uploadedImages = [];
  for (var i = 0; i < req.files.length; i++) {
    var image = {
      imageData: fs.readFileSync(req.files[i].path),
      imageName: req.files[i].originalname,
      fileName: req.files[i].filename,
      path: req.files[i].path,
      size: req.files[i].size,
      encoding: req.files[i].encoding
    };
    artData.uploadedImages.push(image);
    console.log(image);
  }

  var newArtObject = new artModel(artData);
  newArtObject.save(function (error, data) {
    if (error) {
      res.send({error: error});
    } else {
      res.json(data);
    }
  });

});


app.get('/Art/allArts', function (req, res) {
  var artistName = req.param('artistName');
  artModel.find({'artistName': artistName}, function (error, art) {
    if (!error) {
      res.send(art);
    } else {
      res.send(error)
    }

  });
});