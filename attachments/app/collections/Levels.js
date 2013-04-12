var Levels = Backbone.couch.Collection.extend({
  couch: function() {
    return {
      view: 'ghana-reads/active_levels?group=true',
    }
  },
  model: Level,
  _db: Backbone.couch.db(thisDb)
})