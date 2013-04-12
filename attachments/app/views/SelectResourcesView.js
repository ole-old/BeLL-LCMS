var SelectResourcesView = Backbone.View.extend({

  el: 'select.resources',
  
  render: function () {

    // Boot up the Resources collection
    var resources = new Resources();

    // Get the resources from the server and then template them out one by one
    resources.fetch({
      success: function (resources) {

        // Sort those resources alphabetically as described in the Collection's comparator
        resources.sort()

        // Time to go through each resource and template them out
        _.each(resources.models, function(resource) {

          // Because we added include_docs to the URL for the Collection, we don't have the fetch each resource individually, 
          // just go straight to rendering the view. This is an optimization because we're forced to have such a big collection
          // due to UI requirements of showing all resources in one list.
          var selectResourceView = new SelectResourceView({model: resource})
          selectResourceView.render()

        })

      }

    })

  }

});