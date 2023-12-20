import { module, test } from 'qunit';
import { setupRenderingTest } from 'frontend-test-assignment/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | format-number', function (hooks) {
  setupRenderingTest(hooks);

  test('it writes out ∞ when value is "appeared"', async function (assert) {
    this.set('inputValue', 'appeared');

    await render(hbs`{{format-number this.inputValue}}`);

    assert.dom().hasText('∞');
  });

  test('it writes out -∞ when value is "disappeared"', async function (assert) {
    this.set('inputValue', 'disappeared');

    await render(hbs`{{format-number this.inputValue}}`);

    assert.dom().hasText('-∞');
  });
});
