import { module, test } from 'qunit';
import { setupTest } from 'frontend-test-assignment/tests/helpers';

module('Unit | Route | keyword-results', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:keyword-results');
    assert.ok(route);
  });
});
