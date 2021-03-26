import { DataTypes } from 'sequelize';
import { db } from '../utils/db';

export const User = db.define('User', {
    name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING,
        validate: {
            isEmail: true
        }
    }
}, {
    paranoid: true
});