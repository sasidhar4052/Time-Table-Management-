const express = require('express');

const router = express.Router();

const authController = require('../controllers/auth');

router.get('/user/login',authController.getUserLogin);

router.get('/admin/login',authController.getAdminLogin);

router.post('/user/login',authController.postUserLogin);

router.post('/admin/login',authController.postAdminLogin);

module.exports = router;