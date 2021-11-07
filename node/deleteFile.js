const fs = require("fs")

exports.del=function(){
   fs.unlink ('num.text', function(err){
       if (err) throw err;
       console.log("deleted")
   })

}