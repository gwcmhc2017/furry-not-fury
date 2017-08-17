$(document).ready(function(){
  var distanceFromLeft = 0;
    var distanceFromTop = 0;
  $(document).keydown(function(event){
    if (event.keyCode === 39){
      distanceFromLeft +=12;
      $('#cat').css('left', distanceFromLeft);
    }
    if (event.keyCode === 37){
      distanceFromLeft -=11;
      $('#cat').css('left', distanceFromLeft);
    }


    if (event.keyCode === 38){
      distanceFromTop -=12;
      $('#cat').css('top', distanceFromTop);
    }
    if (event.keyCode === 40){
      distanceFromTop +=11;
      $('#cat').css('top', distanceFromTop);
    }
    if ("top" === 775 && "left" === 50){
      $('#help1').show();
    }

  });
});
