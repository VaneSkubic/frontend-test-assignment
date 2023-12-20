import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class KeywordResultsRoute extends Route {
  @service dataFetcher;

  async model() {
    try {
      return await this.dataFetcher.fetchKeywordResults();
    } catch (error) {
      return [];
    }
  }
}
