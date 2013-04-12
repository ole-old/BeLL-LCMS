var Resources = Backbone.couch.Collection.extend({
  couch: function() {
    return {
      view: 'ghana-reads/resources?include_docs=true',
    }
  },
  model: Resource,
  comparator: function(resource) {
    var title = resource.get('title')
    if (title) return title.toLowerCase()
  },
  _db: Backbone.couch.db(thisDb)
})