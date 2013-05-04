var Group = Backbone.Model.extend({

  idAttribute: "_id",

  urlRoot: "/" + window.thisDb,

  defaults: {
    kind: "group"
  },

  // @todo This event thing isn't working so well 
  events: {
    "all": "createDatabase"
  },

  initialize: function(){
    this.on('all', this.createDatabase(), this)
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
    console.log(this)
    if(this.get('database') == "" && this.get('_id')) {
      console.log('Attempting to create a database for group ' + this.get("_id"))
      var databaseName = "group-" + this.get('_id')
      var that = this 
      $.couch.db(databaseName).create({
        success: function(data) {
          that.set("database", databaseName)
          that.save()
        },
        error: function(status) {
          console.log(status);
        }
      });
    }
  },

  
})
