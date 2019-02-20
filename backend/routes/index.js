import express from 'express';

var router = express.Router();

// Import index action from weather controller
const weatherController=require('../controllers/weather')

//Routes
router.post('/weatherClient.json',weatherController.getWeatherStateClient)

export default router;