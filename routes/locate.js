const express = require('express');
const mongodb = require('mongodb');
const mongodbClient = mongodb.MongoClient;

const url =
  'mongodb+srv://moelaal:012050@cluster0.ddegqlh.mongodb.net/locations?retryWrites=true&w=majority';
const router = express.Router();

const client = new MongoClient(url);

const locationMap = {
  location: [],
};

router.post('/add-location', (req, res) => {
  client.connect(function (err, client) {
    const db = client.db('locations');

    db.collection('user-locations').insertOne(
      {
        address: req.body.address,
        coords: { lat: req.body.lat, lng: req.body.lng },
      },
      function (err, result) {
        console.log(result);
        res.json({ message: 'Success', locId: r.insertedId });
      }
    );
  });

  // locationMap.location.push({
  //   id: new Date().getTime().toString(),
  //   address: req.body.address,
  //   coords: { lat: req.body.lat, lng: req.body.lng },
  // });
  // res.json({ message: 'Data ok', locId: id });
});

router.get('/location/:lid', (req, res) => {
  const locationId = req.params.lid;

  client.connect(function (err, client) {
    const db = client.db('locations');
    db.collection('user-locations').findOne(
      { _id: new mongodb.ObjectID(locationId) },
      function (err, doc) {
        if (!doc) {
          return res.status(404).json({ message: 'Location not found' });
        }
        res.json({ address: doc.address, coordinates: doc.coords });
      }
    );
    // const location = locationMap.location.find((loc) => {
    //   return loc.id === locationId;
    // });
    // if (!location) {
    //   res.status(404).json({ message: 'Not found' });
    // }
    // res.json({ address: location.address, coordinates: location.coords });
  });
});

module.exports = router;
