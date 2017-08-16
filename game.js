$(document).ready(function(){
  var distanceFromLeft = 0;
    var distanceFromTop = 0;
  $(document).keydown(function(event){
    if (event.keyCode === 39){
      distanceFromLeft +=9;
      $('#cat').css('left', distanceFromLeft);
    }
    if (event.keyCode === 37){
      distanceFromLeft -=8;
      $('#cat').css('left', distanceFromLeft);
    }


    if (event.keyCode === 38){
      distanceFromTop -=9;
      $('#cat').css('top', distanceFromTop);
    }
    if (event.keyCode === 40){
      distanceFromTop +=8;
      $('#cat').css('top', distanceFromTop);
    }
  });
});
