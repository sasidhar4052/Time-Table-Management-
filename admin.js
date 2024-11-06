const express = require('express');

const router = express.Router();

const adminController = require('../controllers/admin');

router.get('/admin/timetable',adminController.getTimeTable);

router.get('/admin/add-timetable',adminController.getAddTimeTable);

router.post('/admin/add-timetable',adminController.postAddTimeTable);

router.get('/admin/edit-timetable/:timeTableId',adminController.getEditTimeTable);

router.post('/admin/edit-timetable',adminController.postEditTimeTable);

module.exports = router;