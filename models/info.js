// const { default: Profile } = require("../client/src/components/Profile");

module.exports = function (sequelize, DataTypes) {
  const profile = sequelize.define("profile", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    email: {
      type: DataTypes.STRING
    },
    tutor: {
      type: DataTypes.STRING
    },
    student: {
      type: DataTypes.STRING
    },
    grade: {
      type: DataTypes.STRING
    },
    level: {
      type: DataTypes.STRING
    },
    price: {
      type: DataTypes.INTEGER
    },
    subject: {
      type: DataTypes.STRING
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

