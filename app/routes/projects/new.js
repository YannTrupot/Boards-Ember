import Route from '@ember/routing/route';

import EmberObject from '@ember/object';

export default Route.extend({
  model(){
    return EmberObject.create();
  },
  actions:{
    addProject:function (proj) {
      proj = this.get('store').createRecord('project',JSON.parse(JSON.stringify(proj)));
      proj.save().then(() => {
        this.transitionTo("projects");
      });
    }
  }
});
