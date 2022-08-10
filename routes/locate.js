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
  res.json({ message: 'Data ok', locId: id });
});

router.get('/location/:lid', (req, res) => {
  const locationId = req.params.lid;
  const location = locationMap.location.find((loc) => {
    return loc.id === locationId;
  });
  if (!location) {
    res.status(404).json({ message: 'Not found' });
  }
  res.json({ address: location.address, coordinates: location.coords });
});

module.exports = router;
