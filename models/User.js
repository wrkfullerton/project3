module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define("User", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    first_name: {
      type: DataTypes.STRING
    },
    last_name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    },
    grade: {
      type: DataTypes.STRING
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
      timestamps: false,
      indexes: [
        {
          unique: false,
          fields: ['email']
        }]
    })

  User.associate = function (models) {
    User.hasMany(models.profile, {
      onDelete: 'CASCADE'
    })
  };


  return User;
}