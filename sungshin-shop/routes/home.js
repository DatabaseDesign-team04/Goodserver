const express = require('express');
const router = express.Router();
const homeController = require('../controller/homeController');
const jwtMiddlewares = require('../middlewares/middlewares');

router.get('/goodsHome', jwtMiddlewares.userJwt, homeController.goodsHome);

module.exports = router;