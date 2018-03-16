import Route from '@ember/routing/route';

import EmberObject, {computed} from '@ember/object';

const Projects = EmberObject.extend();

export default Route.extend({
  model(){
    let projects = this.get('store').findAll('project');
    return Projects.create({ datas : projects});
  },
  actions:{
    delete:function (proj) {
      proj.destroyRecord();
    }
  }
});
