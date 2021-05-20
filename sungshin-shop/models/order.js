module.exports = (sequelize, DataTypes) => {
  return sequelize.define('ORDER', {
    //모델의 Attributes(Column)을 정의하는 곳
    created_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    orderAllCount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    orderAllPrice: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    destination: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  },{
    //모델의 옵션들을 지정하는 곳
    freezeTableName: true,
    timestamps: false,
  });
}