import Service from '@ember/service';

export default class DataFetcherService extends Service {
  async fetchKeywordResults() {
    const response = await fetch('/api/keywords');
    if (!response.ok) {
      throw new Error('Failed to fetch keywords');
    }
    return response.json();
  }
}
