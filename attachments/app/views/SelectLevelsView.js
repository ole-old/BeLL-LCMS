var SelectLevelsView = Backbone.View.extend({

  el: 'select#levels',

  render: function () {

    var levels = new Levels();
    
    levels.fetch({

      success: function (levels) {

        console.log(levels)
       
        // Place each level into its own selectLevelView
        _.each(levels.models, function(level) {
              var selectLevelView = new SelectLevelView({model: level})
              selectLevelView.render()
        })

      }

    })

  }

});