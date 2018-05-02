import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('Unit | mirage-bug-repro', function(hooks) {
  setupTest(hooks);
  setupMirage(hooks)

  test('polymorphic bug', async function(assert) {
    let post = this.server.create('post');
    post.createComment({ body: 'foo' });
    assert.equal(post.comments.models.length, 1);
  });
});
