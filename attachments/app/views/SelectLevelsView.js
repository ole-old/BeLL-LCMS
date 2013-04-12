var SelectLevelsView = Backbone.View.extend({
  el: 'select#levels',
  render: function () {
    var that = this
    var levels = new Levels();
    levels.fetch({
      success: function (levels) {
        console.log(levels)
        _.each(levels.models, function(level) {
              var selectLevelView = new SelectLevelView({model: level})
              selectLevelView.render()
        })
      }
    })
  }
});