 var couchapp = require('couchapp')
  , path = require('path')

ddoc = 
  { _id:'_design/ghana-reads'
  , rewrites : 
    [ {from:"/", to:'index.html'}
    , {from:"/api", to:'../../'}
    , {from:"/api/*", to:'../../*'}
    , {from:"/*", to:'*'}
    ]
  }
  

ddoc.views = {
    
  
  /*
   * Get all of the unique levels in resources.
   * 
   * Ex: http://raspberrypi.local:5984/bell-library/_design/ghana-reads/_view/levels?group=true 
   */
  active_levels: {
    map: function(doc){ 
      if (doc.kind == 'resource') {
        doc.levels.forEach(function(level) {
          emit(level,null)
        })
      }
    },
    reduce: function(keys, values) {
      return values.length
    }
  },
  

  /*
   * http://raspberrypi.local:5984/bell-library/_design/ghana-reads/_view/resources_by_level?key="p3"
   */
  resources_by_level: {
    map: function(doc) {
      if (doc.kind == 'resource') {
        doc.levels.forEach(function(level) {
          emit(level, doc._id)
        })
      }
    }
  }

}

ddoc.validate_doc_update = function (newDoc, oldDoc, userCtx) {   
  if (newDoc._deleted === true && userCtx.roles.indexOf('_admin') === -1) {
    throw "Only admin can delete documents on this database."
  } 
}

couchapp.loadAttachments(ddoc, path.join(__dirname, 'attachments'))

module.exports = ddoc