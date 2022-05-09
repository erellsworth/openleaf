import { Genre, GenreModel } from "./Genre";
import { MarketModel, Market} from "./Market";

MarketModel.belongsToMany(GenreModel, { through: 'MarketGenres' });
GenreModel.belongsToMany(MarketModel, { through: 'MarketGenres' });

export { Genre, Market }