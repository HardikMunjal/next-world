var request = require('request');
var Role = require('../schemas/roleSchema');

var cModel = {


  
  createNewRole: function(data,cb){
      var json = data.role;
      var role = new Role(json)
      role.save(function(err, result){
        if(result && data.role){      
          console.log(role,'ok',json,'saved successfully')
        }
        return cb(null,result); 
      })
    },

    fetchRole: function(data,cb){
      Role.find({name:data.name}).lean().exec(function(err, result){
       if(err){
          return cb(err)
        }else{          
          var extensiblerole = result;
          return cb(null,result);
        }
      })
    },
 
  updateRole: function(data,cb){
      
       Role.update({_id: data.r_id}, data.role, function(err, result) {
        console.log(err,result)
        if (err) {
          return cb(err);
        }
        return cb(null,result);
      });
      
    },

   deleteRole: function(data,cb){
      
      Role.findOneAndRemove({_id: data.r_id}, function(err, result) {
        if (err) return cb(err);

        // we have deleted the user
        return cb(null,result);
      });
    }
  };



module.exports = cModel;