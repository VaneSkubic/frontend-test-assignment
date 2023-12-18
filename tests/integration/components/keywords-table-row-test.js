import { module, test } from 'qunit';
import { setupRenderingTest } from 'frontend-test-assignment/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | keywords-table-row', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<KeywordsTableRow />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <KeywordsTableRow>
        template block text
      </KeywordsTableRow>
    `);

    assert.dom().hasText('template block text');
  });
});
