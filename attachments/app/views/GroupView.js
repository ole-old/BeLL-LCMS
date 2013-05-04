var GroupView = Backbone.View.extend({

  render: function () {
    var groupForm = new GroupForm({model: this.model})
    groupForm.render()
    this.$el.append(groupForm.el)
  }

});