import { Model, belongsTo } from 'ember-cli-mirage';

export default Model.extend({
  commentable: belongsTo({ polymorphic: true, inverse: 'comments' })
});
