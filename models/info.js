// const { default: Profile } = require("../client/src/components/Profile");

module.exports = function (sequelize, DataTypes) {
  const profile = sequelize.define("profile", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    price: {
      type: DataTypes.INTEGER
    },
    created: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  },
    {
      timestamps: false
    })

  profile.associate = function (models) {
    profile.belongsTo(models.User, {
      targetKey: 'email',
      foreignKey: {
        name: 'email',
        allowNull: false
      }
    });

  };


  return profile;
}

