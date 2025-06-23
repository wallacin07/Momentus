const Sequelize = require("sequelize");

module.exports = (sequelize) => {
    const Payments = sequelize.define('Payments', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        value: {
            type: Sequelize.FLOAT,
            allowNull: false
        }
    });

    Payments.associate = (models) => {
        Payments.belongsTo(models.Events, {
            foreignKey: 'eventId',
            as: 'events'
        });

        Payments.belongsTo(models.Ceremonialist, {
            foreignKey: 'ceremonialistId',
            as: 'ceremonialist'
        });
    };
    return Payments;
}