import DS from 'ember-data';

export default DS.Model.extend({
  _id: DS.attr('string'),
  Identity: DS.attr('string')
});
