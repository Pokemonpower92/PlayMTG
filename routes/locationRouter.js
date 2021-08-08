const express  = require('express');
const locationController = require('../controllers/locationController');
const router   = express.Router();


router.get('/', locationController.getLocations);
router.get('/:id', locationController.getLocationById);
router.post('/', locationController.createLocation);
router.put('/:id/edit', locationController.updateLocation);
router.delete('/:id', locationController.deleteLocation);

module.exports = router;