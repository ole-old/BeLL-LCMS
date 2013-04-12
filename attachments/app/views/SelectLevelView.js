var SelectLevelView = Backbone.View.extend({

  el: 'select#levels',

  events: {
    // @todo This event is firing for EVERY level, should just be this one level.  Might need to use something like View.setElement
    // 'click': 'showResourcesByLevel'
  },

  render: function () {
    var template = _.template($('#level-on-form-template').html(), {level: this.model});
    this.$el.append(template);
  },

  showResourcesByLevel: function(ev) {
    console.log(ev)
    console.log(this)
  }
  
});