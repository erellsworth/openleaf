import { DataTypes } from 'sequelize';
import { db } from '../utils/db';

export const Genre = db.define('Genre', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
});