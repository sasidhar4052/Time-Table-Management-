const express = require('express');

const router = express.Router();

const userController = require('../controllers/user');

router.get('/user/timetable',userController.getTimeTable);

module.exports = router;