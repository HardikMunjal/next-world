var roleModel = require('../models/roleModel');

var role = {

  checkExistingRole: function (req, res, next) {

    var data = {};
    data.name = req.body.name;
  

    roleModel.fetchRole(data, function (err, result) {
      if (err) {
        return res.status(410).send(err);
      }
      if (result.length > 0) {
        return res.json('Role Already Exist')
      } else {
        //console.log('I AM STUCK ,WHERE TO GO')
        next()
      }
    })
  },

  createNewRole: function (req, res, next) {

    var data = {};

    if(!req.body){
      console.log('not a body')
    }
    data.role = req.body;
    if(!req.body.name){
      return res.json('Role Name is Mandatory To Save')
    }
    roleModel.createNewRole(data, function (err, result) {
      if (err) {
        return res.status(410).send(err.message);
      }
      console.log(result)
      if (!result) {
        var message = "Some Error Occurred";

        return res.status(400).send(message);
      }
      return res.json("role added successfully");
    })
  },

  updateRole: function (req, res, next) {

    var data = {};



    if(!req.params.role_id){
      return res.json("roleid is missing")
    }

    if(!req.body.name && !req.body.description){
      return res.json("both name and discription are missing")
    }

    data.r_id = req.params.role_id;
    data.role = req.body;
    roleModel.updateRole(data, function (err, result) {
      if (err) {
        return res.status(410).send(err.message);
      }

      console.log(result)
      return res.json("role updated successfully");
    })

  },

  deleteRole: function (req, res, next) {

    var data = {};
    data.r_id = req.params.role_id ? req.params.role_id : null;
    roleModel.deleteRole(data, function (err, result) {
      if (err) {
        return res.status(410).send(err.message);
      }
      console.log(result)
      return res.json("role deleted successfully");
    })

  },

  runSmallJob : function (req, res, next){
    return res.json("instant response from small job")
  },

  runBigJob : function (req, res, next){


    function looper(min,max){
      for(var i=min;i<max;i++){
        console.log(i)
        if(i==300000){
          return res.json("I am done")
        }
      }
      setImmediate(function(){
        looper(min+10000,max+10000)
      })
 
    }

    looper(0,10000)
      
  }
}
module.exports = role;