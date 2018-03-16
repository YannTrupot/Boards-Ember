import Route from '@ember/routing/route';

import EmberObject from '@ember/object';

const Developers = EmberObject.extend();

export default Route.extend({
  model(dev){

    return Developers.create({ dev : dev});
  },
  actions:{
    editDeveloper:function (dev) {
      dev = this.get('store').createRecord('developer',JSON.parse(JSON.stringify(dev)));
      dev.save().then(() => {
        this.transitionTo("developers");
      });
    }
  }
});
