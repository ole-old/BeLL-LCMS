var SelectResourcesView = Backbone.View.extend({
  el: 'select.resources',
  render: function () {
    var that = this
    var resources = new Resources();
    resources.fetch({
      success: function (resources) {
        //console.log(resources)
        resources.sort()
        _.each(resources.models, function(resource) {
          // @todo Best practice to fetch the model in the collection view or the model's view?
          // Maybe best to includs_docs on the collection url so we don't have to perform an http request for 
          // every resource.
          resource.fetch({
            success:function(resource) {
              var selectResourceView = new SelectResourceView({model: resource})
              selectResourceView.render()
            }
          })
        })
      }
    })
  }
});