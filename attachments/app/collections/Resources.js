var Resources = Backbone.couch.Collection.extend({

  // Define the CouchDB View that this Collection gets its data from
  couch: function() {
    return {
      view: 'ghana-reads/resources?include_docs=true',
    }
  },
 
  model: Resource,

  // Order the resources alphabetically by title when sort() is called on this Collection
  comparator: function(resource) {
    var title = resource.get('title')
    if (title) return title.toLowerCase()
  },

  _db: Backbone.couch.db(window.thisDb)

})