module.exports = (sequelize, DataTypes) => {
  return sequelize.define('USER', {
    //모델의 Attributes(Column)을 정의하는 곳
    userName: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    nickName: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    phoneNumber: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    //모델의 옵션들을 지정하는 곳
    freezeTableName: true,
    timestamps: false
  });
}