var Levels = Backbone.couch.Collection.extend({

  // Define the CouchDB View that this Collection gets its data from
  couch: function() {
    return {
      view: 'ghana-reads/active_levels?group=true',
    }
  },

  model: Level,

  _db: Backbone.couch.db(thisDb)
  
})