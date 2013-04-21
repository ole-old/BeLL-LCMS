$(function() {


    window.ResourceForm = Backbone.View.extend({

      el:"#app",

      events: {
          "click button#formButton": "saveForm"
      },

      initialize: function() {
        
      },

      render: function(id = null) {

        if (id) {
          this.model = new Resource( { id : $.url().param('id') } )
          that = this
          this.model.fetch({success: function(model, response, options) {
            that.model = model
            return that.buildForm()
          }})

        }
        else {
          this.model = new Resource()
          return this.buildForm()
        }



      },

      buildForm: function() {

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
          var that = this
          this.model.save(null, {success: function(model, response, options) {
            // Now that the model is saved as a couch doc, we can attach a new file to the couch doc
            that.saveFileAttachment()
          },
          error: function() {
            alert('nope')
          }})

          console.log(this.model.toJSON())
      },

      saveFileAttachment: function() {
        $("form#fileAttachment .rev").attr('value', this.model.get('_rev'))
        var that = this
        $('form#fileAttachment').ajaxSubmit({
          url: "/"+ that.model._db.name +"/"+ that.model.get('_id'),
          success: function(response) {
            alert("Your resource has been submitted.")
          }
        })        
      }

    });

});
