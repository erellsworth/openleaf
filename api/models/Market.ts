import { DataTypes, Model, ModelAttributes, Optional } from "sequelize";
import { MarketInterface, MarketQuery } from "~/interfaces/Market.interface";
import { PaginatedResults } from "~/interfaces/Misc.interface";
import { db } from '../utils/db';

interface creationAttributes extends Optional<MarketInterface, "id"> { Tag: any }

// We need to declare an interface for our model that is basically what our class would be
interface Instance
    extends Model<any, creationAttributes>,
    MarketInterface { }

const attributes: ModelAttributes<Instance, MarketInterface> = {
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
    isPro: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0
    },
    isPaying: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0
    },
    reprints: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0
    },
    multipleSubs: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0
    },
    simultaneousSubs: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0
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
};

const MarketModel = db.define<Instance>('Market', attributes);

const Market = {
    findAll: async (query: MarketQuery): Promise<PaginatedResults> => {
        const { limit, page } = query;
        const offset = (parseInt(page.toString()) - 1) * limit;

        const { count, rows } = await MarketModel.findAndCountAll({
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
    findBySlug: async (slug: string): Promise<MarketInterface> => {
        const content = await MarketModel.findOne({
            where: {
                slug,
            },
            logging: false
        }) as unknown as MarketInterface;

        return content;
    }
};

export {
    MarketModel,
    Market
}