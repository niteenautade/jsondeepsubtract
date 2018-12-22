var jsonDeepSubtract = function (oldObj,newObj){
  var final = {};
  Object.keys(newObj).forEach((key)=>{
    if(["string","number"].includes(typeof(newObj[key]))){
      if(oldObj[key]!=newObj[key]){
        final[key]=newObj[key]
      }
    }else if(newObj[key] instanceof Date){
      if(new Date(oldObj[key]).getTime() != new Date(newObj[key]).getTime()){
        final[key]=newObj[key]
      }
    }
    else if(newObj[key] && typeof(newObj[key])=="object" && !Array.isArray(newObj[key])){
      final[key]=jsonDeepSubtract(oldObj[key],newObj[key])
    }
    else if(newObj[key] && typeof(newObj[key])=="object" && Array.isArray(newObj[key])){
      var arrLength = newObj[key].length
      final[key]=[]
      newObj[key].forEach( (arrEl,i) => {
        if(typeof(arrEl)!="object"){
          if(arrEl != oldObj[key][i]){
              final[key].push(arrEl)
          }
        }
        else if(typeof(arrEl)=="object" && !Array.isArray(arrEl)){
          var obj = jsonDeepSubtract(oldObj[key][i],arrEl)
          final[key].push(obj)
        }
      })
    }
    else{
        final[key]=newObj[key]
    }
  })
  
  Object.keys(final).forEach((key,i)=>{
    if(final[key] && typeof(final[key])=="object" && !Array.isArray(final[key])){
      if(Object.keys(final[key]).length == 0){
        delete final[key]
      }
    }
    else if(final[key] && typeof(final[key])=="object" && Array.isArray(final[key])){
      if(typeof(final[key][0])=="object" && !Array.isArray(final[key][0])){
         final[key].forEach((obj,i)=>{
           if(Object.keys(obj).length == 0){
              final[key].splice(i,1)
           }
         })
      }
      if(Object.keys(final[key]).length == 0){
        delete final[key]
      }
    }
    
  })
  return final
}

module.exports = jsonDeepSubtract