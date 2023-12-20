import Model, { attr } from '@ember-data/model';

export default class KeywordResultsModel extends Model {
  @attr query;
  @attr position;
  @attr searchVolume;
  @attr resultCount;
  @attr lastMonthChange;
  @attr competitorAverageRank;
  @attr bestCompetitorPosition;
}
