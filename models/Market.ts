import { DataTypes } from 'sequelize';
import { db } from '../utils/db';
import { Genre } from './Genre';

export const Market = db.define('Market', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    description: {
        type: DataTypes.TEXT
    },
    website: {
        type: DataTypes.TEXT,
        validate: {
            isUrl: true
        }
    },
    guidelines: {
        type: DataTypes.TEXT,
        validate: {
            isUrl: true
        }
    },
    submissionOptions: {
        type: DataTypes.JSON
    },
    stats: {
        type: DataTypes.JSON
    },
    is_pro: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0
    },
    is_paying: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0
    },
    reprints: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0
    },
    multiple_submissions: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0
    },
    simultaneous_submissions: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0
    },
}, {
    paranoid: true
});

Market.belongsToMany(Genre, { through: 'MarketGenres' });
Genre.belongsToMany(Market, { through: 'MarketGenres' });
