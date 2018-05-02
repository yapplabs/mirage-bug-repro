import { Model, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  comments: hasMany('comment', { inverse: 'commentable' })
});
