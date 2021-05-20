module.exports = (sequelize, DataTypes) => {
  return sequelize.define('GOODS', {
    //모델의 Attributes(Column)을 정의하는 곳
    goodsName: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    inventory: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    reStoke: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  },{
    //모델의 옵션들을 지정하는 곳
    freezeTableName: true,
    timestamps: false,
  });
}