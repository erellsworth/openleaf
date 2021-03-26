import { DataTypes } from 'sequelize';
import { db } from '../utils/db';
import { Genre } from './Genre';
import { Market } from './Market';
import { User } from './User';

export const Submission = db.define('Submission', {
    date_submitted: {
        type: DataTypes.DATEONLY
    },
    date_resolved: {
        type: DataTypes.DATEONLY
    },
    status: {
        type: DataTypes.STRING
    },
    feedback: {
        type: DataTypes.TEXT
    }
});

Submission.hasOne(Market);
Submission.hasOne(User);
Submission.hasOne(Genre);
User.hasMany(Submission);
Market.hasMany(Submission);
