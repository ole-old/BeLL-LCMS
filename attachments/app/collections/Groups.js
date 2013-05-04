var Groups = Backbone.couch.Collection.extend({

  // Define the CouchDB View that this Collection gets its data from
  couch: function() {
    return {
      view: 'bell-lcms/groups?include_docs=true',
    }
  },
 
  model: Group,

  comparator: function(resource) {
    var title = resource.get('name')
    if (title) return title.toLowerCase()
  },

  _db: Backbone.couch.db(window.thisDb)

})