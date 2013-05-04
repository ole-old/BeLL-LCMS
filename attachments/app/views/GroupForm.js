$(function() {

    window.GroupForm = Backbone.View.extend({

      el:"#app",

      events: {
          "click button#formButton": "saveForm"
      },

      initialize: function() {
        
      },

      render: function(id = null) {

        if (id) {
          this.model = new Group( { id : $.url().param('id') } )
          that = this
          this.model.fetch({success: function(model, response, options) {
            that.model = model
            return that.buildForm()
          }})

        }
        else {
          this.model = new Group()
          return this.buildForm()
        }



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
            var databaseName = "group-" + model.id
            $.couch.db(databaseName).create({
              success: function(data) {
                model.set("database", databaseName )
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
