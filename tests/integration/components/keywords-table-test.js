import { module, test } from 'qunit';
import { setupRenderingTest } from 'frontend-test-assignment/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | keywords-table', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders with data', async function (assert) {
    this.set('sampleData', [{}]);
    await render(hbs`<KeywordsTable @keywords={{this.sampleData}} />`);

    assert.dom('tbody').exists({ count: this.sampleData.length }, 'Correct number of rows rendered');
  });

  test('empty state', async function (assert) {
    await render(hbs`<KeywordsTable @error={{1}} @keywords={{null}} />`);
    assert.dom('.empty').hasText('No keywords to show.', 'Empty state is rendered correctly');
  });

  test('error state', async function (assert) {
    await render(hbs`<KeywordsTable @error={{0}} @keywords={{null}} />`);
    assert.dom('.empty').hasText('Failed to fetch data.', 'Error state is rendered correctly');
  });

});
