const statusCode = require("../modules/statusCode");
const responseMessage = require("../modules/responseMessage");
const util = require("../modules/util");

module.exports = {
  goodsHome: async (req, res) => {
    const userIdx = req.userIdx;

    try {
      
    } catch (error) {
      console.log(error);
      res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.INTERNAL_SERVER_ERROR));
      return;
    }
  }
}