const Sequelize = require("sequelize");

module.exports = (sequelize) => {
    const Installments = sequelize.define('Installments', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        status: {
            type: Sequelize.STRING,
            allowNull: false
        },
        value: {
            type: Sequelize.FLOAT,
            allowNull: false
        },
        number: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
    });
    Installments.associate = (models) => {
        Installments.belongsTo(models.Payments, {
            foreignKey: 'paymentId',
            as: 'payments'
        });
    };

    return Installments;
}