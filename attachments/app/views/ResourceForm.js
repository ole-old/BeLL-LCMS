$(function() {


    window.ResourceForm = Backbone.View.extend({
      events: {
          "click button#formButton": "saveForm"
      },

      initialize: function() {
        this.model = new Resource();
      },

      render: function() {
        var $button = $('<button type="button" name="save" id="formButton">save</button>');

        this.form = new Backbone.Form({ model: this.model });

        this.$el.append(this.form.render().el);
        this.$el.append($button);

        return this;
      },

      saveForm: function() {
          this.form.commit();
          this.model.save();

          alert('hit saveForm');
          console.log(this.model.toJSON());
      }
    });

});
