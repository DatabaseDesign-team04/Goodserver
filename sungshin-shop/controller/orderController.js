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
    
      res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.SIGNUP_SUCCESS));
      return;
    } catch (error) {
      console.log(error);
      res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.INTERNAL_SERVER_ERROR));
      return;
    }
  },
  signin: async (req, res) => {
    const { nickName } = req.body;

    if (!nickName) {
      res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
      return;
    }

    const nickNameCheck = await userService.signIn(nickName);

    if (!nickNameCheck) {
      res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NOT_FOUND_USER))
      return;
    }

    const { id } = nickNameCheck;

    const { accessToken, refreshToken } = await jwt.sign(id);
    
    res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.SINGIN_SUCCESS, {
      accessToken: accessToken,
      refreshToken: refreshToken
    }))
  }
}