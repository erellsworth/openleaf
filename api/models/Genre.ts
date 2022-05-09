import { DataTypes, Model, ModelAttributes, Optional } from "sequelize";
import { BaseQuery } from "~/interfaces/Base.interface";
import { GenreInterface } from "~/interfaces/Genre.interface";
import { PaginatedResults } from "~/interfaces/Misc.interface";
import { db } from '../utils/db';

interface creationAttributes extends Optional<GenreInterface, "id"> { Tag: any }

// We need to declare an interface for our model that is basically what our class would be
interface Instance
    extends Model<any, creationAttributes>,
    GenreInterface { }

const attributes: ModelAttributes<Instance, GenreInterface> = {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    slug: {
        type: DataTypes.STRING,
        allowNull: false
    },
    // standard attributes:
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER.UNSIGNED,
    },
    createdAt: {
        type: DataTypes.DATE,
        get() {
            const rawValue = this.getDataValue('createdAt');
            return new Date(rawValue).toDateString();
        }
    },
    updatedAt: {
        type: DataTypes.DATE,
        get() {
            const rawValue = this.getDataValue('updatedAt');
            return new Date(rawValue).toDateString();
        }
    }    
}

const GenreModel = db.define<Instance>('Genre', attributes);

const Genre = {
    findAll: async (query: BaseQuery): Promise<PaginatedResults> => {
        const { limit, page } = query;
        const offset = (parseInt(page.toString()) - 1) * limit;

        const { count, rows } = await GenreModel.findAndCountAll({
            order: [['name', 'DESC']],
            limit,
            logging: false,
            distinct: true,
            offset
        });

        return {
            contents: rows,
            total: count,
            page: page
        };

    },
    findBySlug: async (slug: string): Promise<GenreInterface> => {
        const content = await GenreModel.findOne({
            where: {
                slug,
            },
            logging: false
        }) as unknown as GenreInterface;

        return content;
    }
};

export {
    GenreModel,
    Genre
}