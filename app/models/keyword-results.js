import Model, { attr } from '@ember-data/model';

export default class KeywordResultsModel extends Model {
    @attr('string') query;
    @attr('number') position;
    @attr('number') searchVolume;
    @attr('number') resultCount;
    @attr('number') lastMonthChange;
    @attr("number") competitorAverageRank;
    @attr("number") bestCompetitorPosition;
}
