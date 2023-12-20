import Service from '@ember/service';

export default class DataFetcherService extends Service {
  async fetchKeywordResults() {
    // Test empty table state
    // if (true) {
    //   throw new Error('Failed to fetch data.');
    // }

    const response = await fetch('/api/keywords');

    if (!response.ok) {
      throw new Error('Failed to fetch keywords');
    }
    return response.json();
  }
}
