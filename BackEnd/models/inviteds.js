const Sequelize = require("sequelize");

module.exports = (sequelize) => {
    const Inviteds = sequelize.define('Inviteds', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        CPF: {
            type: Sequelize.STRING,
            allowNull: false
        },
        phone: {
            type: Sequelize.STRING,
            allowNull: false
        },
        acecessToken: {
            type: Sequelize.STRING,
            allowNull: false
        },
    });

    Inviteds.associate = (models) => {
        Inviteds.belongsTo(models.Events, {
            foreignKey: 'eventId',
            as: 'events'
        });
    };

    return Inviteds;
}