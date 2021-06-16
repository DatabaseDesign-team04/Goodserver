const statusCode = require("../modules/statusCode");
const responseMessage = require("../modules/responseMessage");
const util = require("../modules/util");
const { goods, order } = require('../models/index');

module.exports = {
  goodsOrder: async (req, res) => {
    const userIdx = req.userIdx;

    try {
      const goodsOrder = await goods.findAll({
        attribute: ['goodsName', 'price'],
        where: {
          id: userIdx
        }
      });

      const now = new Date();
      const userOrder = await order.create({
        created_at: now.toUTCString(),
        orderAllCount,
        orderAllPrice,
        destination
      });
    } catch (error) {
      console.log(error);
      res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.INTERNAL_SERVER_ERROR));
      return;
    }
  }
}