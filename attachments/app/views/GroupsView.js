var GroupsView = Backbone.View.extend({

  initialize: function(){
    this.collection.on('add', this.addOne, this)
    this.collection.on('reset', this.addAll, this)
  },

  addOne: function(model){
    var groupView = new GroupView({model: model})
    groupView.render()  
    this.$el.append(groupView.el)
  },

  addAll: function(){
    this.collection.forEach(this.addOne, this)
  },

  render: function() {
    this.addAll()
  }

})


