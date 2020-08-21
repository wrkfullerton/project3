module.exports = (sequelize, DataTypes) => {
    const students = sequelize.define("students", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        student: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 50]
            }
        },
        grade: {
            type: DataTypes.STRING,
            allowNull: true,
            len: [1, 50]
        },
        subject: {
            type: DataTypes.STRING,
            allowNull: true,
            len: [1, 50]
        },
        email: {
            type: DataTypes.INTEGER,
            allowNull: true,
            len: [1, 50]
        },
        createdAt: { type: DataTypes.DATE },
        updatedAt: { type: DataTypes.DATE }
    }, {
        freezeTableName: true
    });

    return students;
};