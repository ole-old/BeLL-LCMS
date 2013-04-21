$(function() {


    window.ResourceForm = Backbone.View.extend({
      events: {
          "click button#formButton": "saveForm"
      },

      initialize: function() {
        this.model = new Resource()
      },

      render: function() {

        // Extra elements not covered in the schema
        var $fileEl = $('<form method="post" id="fileAttachment"><input type="file" name="_attachments" id="_attachments" multiple="multiple" /> <input class="rev" type="hidden" name="_rev"></form>')
        var $button = $('<button type="button" name="save" id="formButton">save</button>')

        this.form = new Backbone.Form({ model: this.model })

        this.$el.append(this.form.render().el)
        this.$el.append($fileEl)
        this.$el.append($button)

        return this;
      },

      saveForm: function() {
          // Put the form's input into the model in memory
          this.form.commit()
          // Send the updated model to the server
          this.model.save(null, {success: function(model, response, options) {
            // Now that the model is saved as a couch doc, we can attach a new file to the couch doc
            $("form#fileAttachment .rev").attr('value', response._rev)
            $('form#fileAttachment').ajaxSubmit({
              url: "/"+ model._db.name +"/"+ response._id,
              success: function(response) {
                alert("Your resource has been submitted.")
              }
            })
          },
          error: function() {
            alert('nope')
          }})

          console.log(this.model.toJSON())
      }
    });

});
