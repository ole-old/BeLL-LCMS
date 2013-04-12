 var SelectResourceView = Backbone.View.extend({
  
  el: '.resources',
  
  render: function () {

    // Generate a levels string
    var levels = ""

    // Combine the levels into one long string
    $.each(this.model.get('levels'), function(index, level) { 
      levels += level + " "
    })

    // Send this model to template with the levels string as well
    var template = _.template($('#resource-on-form-template').html(), {resource: this.model, levels: levels});

    // Append the template output to the el DOM element define above    
    this.$el.append(template);

  }

});