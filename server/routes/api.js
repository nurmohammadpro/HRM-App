import express from 'express';
const router = express.Router();

import * as authController from '../app/controllers/user.controller.js';

//Create Route
router.post('/createUser', authController.createUser);

//Get Route
router.get('/getUser', authController.getUser);

//Update Route
router.put('/updateUser', authController.updateUser);

//Delete Route
router.delete('/deleteUser', authController.deleteUser);

export default router;