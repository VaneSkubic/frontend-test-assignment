import { module, test } from 'qunit';
import { setupRenderingTest } from 'frontend-test-assignment/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | keywords-table', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<KeywordsTable />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <KeywordsTable>
        template block text
      </KeywordsTable>
    `);

    assert.dom().hasText('template block text');
  });
});
