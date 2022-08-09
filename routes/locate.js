const express = require('express');

const router = express.Router();

const locationMap = {
  location: [],
};

router.post('/add-location', (req, res) => {
  locationMap.location.push({
    id: new Date().getTime().toString(),
    address: req.body.address,
    coords: { lat: req.body.lat, lng: req.body.lng },
  });
  res.json({ message: 'Location added' });
});

router.get('/location', (req, res) => {});

module.exports = router;
