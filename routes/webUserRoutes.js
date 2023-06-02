const express = require('express');
const { WebUserControllers } = require('../controllers/webUserControllers');



const webUserRoutes = express.Router();

webUserRoutes.get('/',WebUserControllers.getAll)
webUserRoutes.get('/:id',WebUserControllers.getById)
webUserRoutes.post('/',WebUserControllers.add)

module.exports = {
    webUserRoutes
}