var SelectLevelView = Backbone.View.extend({
  el: 'select#levels',
  /// setElement: function(something) {}, // need to find better docs on this
  events: {
    // @todo This event is firing for EVERY level, should just be this one level.  Might need to use something like View.setElement
    'click': 'showResourcesByLevel'
  },
  render: function () {
    var that = this
    console.log(this.model)
    var template = _.template($('#level-on-form-template').html(), {level: this.model});
    that.$el.append(template);
  },
  showResourcesByLevel: function(ev) {
    console.log(ev)
    console.log(this)
  }
  
});