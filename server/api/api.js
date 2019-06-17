var router = require('express').Router();

router.use('/users',require('./user/userRoutes'));
router.use('/roommates',require('./roommaterequests/roommaterequestRoutes'));
router.use('/rooms',require('./rooms/roomsRoutes'));


module.exports = router;