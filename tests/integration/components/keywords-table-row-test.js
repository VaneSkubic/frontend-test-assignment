import { module, test } from 'qunit';
import { setupRenderingTest } from 'frontend-test-assignment/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | keywords-table-row', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders keyword data correctly', async function (assert) {
    // Sample keyword data
    this.set('keyword', {
      query: 'Example Query',
      uri: 'http://example.com',
      position: 5,
      resultCount: 20,
      lastMonthChange: 10,
      searchVolume: 500,
      competitorAverageRank: 3,
      bestCompetitorPosition: 1
    });

    await render(hbs`<KeywordsTableRow @keyword={{this.keyword}} />`);

    assert.dom('.query-flex').hasText('Example Query http://example.com', 'The query is displayed correctly.');
    assert.dom('.link').hasText('http://example.com', 'The link is displayed correctly.');
    assert.dom('#position').hasText('5', 'The position is displayed correctly.');
    assert.dom('#resultCount').hasText('20', 'The position is displayed correctly.');
    assert.dom('#lastMonthChange').hasText('10', 'The position is displayed correctly.');
    assert.dom('#searchVolume').hasText('500', 'The position is displayed correctly.');
    assert.dom('#competitorAverageRank').hasText('3', 'The position is displayed correctly.');
    assert.dom('#bestCompetitorPosition').hasText('1', 'The position is displayed correctly.');
  });

  test('it renders keyword data correctly along with helpers', async function (assert) {
    // Sample keyword data
    this.set('keyword', {
      query: 'Example Query',
      uri: 'http://example.com',
      position: 5,
      resultCount: 1100,
      lastMonthChange: -10,
      searchVolume: 500,
      competitorAverageRank: 3.62222,
      bestCompetitorPosition: 1
    });

    await render(hbs`<KeywordsTableRow @keyword={{this.keyword}} />`);

    assert.dom('.query-flex').hasText('Example Query http://example.com', 'The query is displayed correctly.');
    assert.dom('.link').hasText('http://example.com', 'The link is displayed correctly.');
    assert.dom('#position').hasText('5', 'The position is displayed correctly.');
    assert.dom('#resultCount').hasText('1.1K', 'The position is displayed correctly.');
    assert.dom('#lastMonthChange').hasText('10', 'The position is displayed correctly.');
    assert.dom('#searchVolume').hasText('500', 'The position is displayed correctly.');
    assert.dom('#competitorAverageRank').hasText('3.6', 'The position is displayed correctly.');
    assert.dom('#bestCompetitorPosition').hasText('1', 'The position is displayed correctly.');
  });

});
