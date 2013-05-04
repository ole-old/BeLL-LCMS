var GroupView = Backbone.View.extend({

  render: function () {
    this.$el.html(this.model.get('name'))
  }

});