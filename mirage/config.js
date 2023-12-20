import {
  discoverEmberDataModels,
  // applyEmberDataSerializers,
} from 'ember-cli-mirage';
import { createServer } from 'miragejs';

import keywordsResults from './data/keywords-results';
import competitorsData from './data/competitors-data';

export default function (config) {
  let finalConfig = {
    ...config,
    // Remove discoverEmberDataModels if you do not want ember-cli-mirage to auto discover the ember models
    models: {
      ...discoverEmberDataModels(config.store),
      ...config.models,
    },
    // uncomment to opt into ember-cli-mirage to auto discover ember serializers
    // serializers: applyEmberDataSerializers(config.serializers),
    routes,
  };

  return createServer(finalConfig);
}

function routes() {
  this.namespace = '/api';
  // this.timing = 4000;

  this.get('/keywords', function () {
    return keywordsResults.map((keyword) => {
      const currentKeywordCompetitors = competitorsData.find(
        (competitor) => competitor.id == keyword.id,
      );
      let competitorAverageRank = calculateAverageRank(
        currentKeywordCompetitors,
      );
      let bestCompetitorPosition = findBestCompetitorPosition(
        currentKeywordCompetitors,
      );

      return {
        id: keyword.id,
        query: keyword.query,
        position: keyword.position_organic,
        searchVolume: keyword.adwords_global_search_volume,
        resultCount: keyword.results_count,
        lastMonthChange: keyword.last_month_change,
        competitorAverageRank: competitorAverageRank,
        bestCompetitorPosition: bestCompetitorPosition,
      };
    });
  });

  function calculateAverageRank(competitorData) {
    let totalRank = 0;
    let count = 0;

    Object.values(competitorData.competitor_results).forEach((competitor) => {
      if (competitor.position_organic !== null) {
        totalRank += competitor.position_organic;
        count++;
      }
    });

    return count > 0 ? totalRank / count : null;
  }

  function findBestCompetitorPosition(competitorData) {
    let bestPosition = null;

    Object.values(competitorData.competitor_results).forEach((competitor) => {
      if (competitor.position_organic !== null) {
        if (
          bestPosition === null ||
          competitor.position_organic < bestPosition
        ) {
          bestPosition = competitor.position_organic;
        }
      }
    });

    return bestPosition;
  }
}
