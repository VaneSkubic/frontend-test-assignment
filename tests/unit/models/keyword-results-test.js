import { module, test } from 'qunit';

import { setupTest } from 'frontend-test-assignment/tests/helpers';

module('Unit | Model | keyword results', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('keyword-results', {});
    assert.ok(model);
  });
});
