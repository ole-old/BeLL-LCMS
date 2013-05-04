$(function() {

    window.GroupForm = Backbone.View.extend({

      events: {
          "click button#formButton": "saveForm"
      },

      initialize: function() {
        if ($.url().param("id")) {
          this.model = new Group( { id : $.url().param('id') } )
        }  
      },

      render: function(id = null) {

        this.buildForm()

      },

      buildForm: function() {

        // Extra elements not covered in the schema
        var $button = $('<button type="button" name="save" id="formButton">save</button>')

        this.form = new Backbone.Form({ model: this.model })

        this.$el.append(this.form.render().el)
        // this.$el.append($fileEl)
        this.$el.append($button)

        return this;



      },


      saveForm: function() {

          // Put the form's input into the model in memory
          this.form.commit()
          // Send the updated model to the server
          var that = this
          this.model.save(null, {success: function(model, response, options) {

            // Create a database for the Group
            console.log(model)
            var databaseName = "group-" + model.get('_id')
            $.couch.db(databaseName).create({
              success: function(data) {
                model.set("database", databaseName )
                model.save()
                console.log(data);
              },
              error: function(status) {
                console.log(status);
              }
            });

          },
          error: function() {
            alert('nope')
          }})

          console.log(this.model.toJSON())

      },


    });

});
