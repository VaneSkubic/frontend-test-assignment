import { module, test } from 'qunit';
import { setupRenderingTest } from 'frontend-test-assignment/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | format-link', function (hooks) {
  setupRenderingTest(hooks);

  test('it adds "-" to empty link', async function (assert) {
    this.set('inputValue', null);

    await render(hbs`{{format-link this.inputValue}}`);

    assert.dom().hasText('-');
  });
  test('it adds (index) to "/"', async function (assert) {
    this.set('inputValue', null);

    await render(hbs`{{format-link this.inputValue}}`);

    assert.dom().hasText('-');
  });
});
