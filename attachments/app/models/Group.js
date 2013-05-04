var Group = Backbone.couch.Model.extend({

  idAttribute: "id",

  urlRoot: thisDb,

  defaults: {
    kind: "group"
  },

  initialize: function() {
    this.on('sync', this.createDatabase(), this)
  },

  schema: {
    name: 'Text',
    description: 'Text',
    subject: { type: 'Select', options: ['english', 'maths', 'other'] },
    levels: { type: 'Checkboxes', options: ['KG', 'P1', 'P2', 'P3', 'P4', 'P5', 'P6','Community Education', 'Teacher Resources'] },
    database: 'Text'
  },

  createDatabase: function() {
    // create a database for the Group if there isn't one already
    if(!this.get('database') && this.id) {
      var databaseName = "group-" + this.get('_id')
      $.couch.db(databaseName).create({
        success: function(data) {
          this.set("database", databaseName)
          this.save()
        },
        error: function(status) {
          console.log(status);
        }
      });
    }
  },

  
})
