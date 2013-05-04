var Group = Backbone.couch.Model.extend({
  "idAttribute":"id",
  urlRoot:thisDb,
  defaults: {
    kind: "group"
  },
  schema: {
    name:       'Text',
    description: 'Text',
    subject:      { type: 'Select', options: ['english', 'maths', 'other'] },
    levels:        { type: 'Checkboxes', options: ['KG', 'P1', 'P2', 'P3', 'P4', 'P5', 'P6','Community Education', 'Teacher Resources'] },
    database: 'Text'
  }

})
