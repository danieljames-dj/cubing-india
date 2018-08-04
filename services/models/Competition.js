const sequelize = require('sequelize');
const DataTypes = sequelize.DataTypes;
module.exports = {
    comp_id: {type: DataTypes.STRING, primaryKey: true},
    name: DataTypes.STRING,
    city_name: DataTypes.STRING,
    information: DataTypes.TEXT,
    year: DataTypes.INTEGER,
    month: DataTypes.INTEGER,
    day: DataTypes.INTEGER,
    end_month: DataTypes.INTEGER,
    end_day: DataTypes.INTEGER,
    event_specs: DataTypes.STRING,
    wca_delegate: DataTypes.TEXT,
    organiser: DataTypes.TEXT,
    venue: DataTypes.STRING,
    venue_address: DataTypes.STRING,
    venue_details: DataTypes.STRING,
    external_website: DataTypes.STRING,
    cell_name: DataTypes.STRING,
    latitude: DataTypes.INTEGER,
    longitude: DataTypes.INTEGER
};
