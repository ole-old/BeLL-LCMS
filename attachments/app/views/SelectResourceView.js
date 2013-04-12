 var SelectResourceView = Backbone.View.extend({
  el: '.resources',
  render: function () {
    var that = this
    // Generate a levels string
    var levels = ""
    $.each(this.model.get('levels'), function(index, level) { 
      levels += level + " "
    })
    var template = _.template($('#resource-on-form-template').html(), {resource: this.model, levels: levels});
    that.$el.append(template);
  }
});