var GroupsTableView = Backbone.View.extend({

  tagName: "table",

  className: "table table-striped",

  initialize: function(){
    this.collection.on('add', this.addOne, this)
    this.collection.on('reset', this.addAll, this)
    this.$el.append("<a href='add-group.html'><i class='icon-plus-sign'></i>create group</a>")
  },

  addOne: function(model){
    var groupView = new GroupRowView({model: model})
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


