let getColor = function(health, status){
  if(status == "SUSPEND"){
    return "#a0a0a0"
  }else{
    if(health >= 90 && health <= 100){
      return "#7ed321";
    }if(health >= 75 && health < 90){
      return "#a2ae3c";
    }if(health >= 50 && health < 75){
      return "#ff8c00";
    }if(health >= 25 && health < 50){
      return "#ff4040";
    }if(health >= 0 && health < 25){
      return "#cc0000";
    }
  }
}
let getStatusColor = function(status){
  if(status == "RUNNING"){
    return "#7ed321";
  }if(status == "SUSPEND"){
    return "#a0a0a0";
  }
}
let info = null;
export {
  getColor,
  getStatusColor,
  info,
}  