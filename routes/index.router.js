const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/user.controller');

const jwtHelper = require('../config/jwtHelper');

router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
router.get('/userProfile', jwtHelper.verifyJwtToken, ctrlUser.userProfile);
router.post('/fetchUserProfile', ctrlUser.fetchUserProfile);
router.post('/resetPassword', ctrlUser.resetPassword);
router.post('/getUserBrowserDetails', ctrlUser.getUserBrowserDetails);

module.exports = router;