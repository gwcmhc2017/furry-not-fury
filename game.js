$(document).ready(function(){
  var distanceFromLeft = 0;
    var distanceFromTop = 0;
  $(document).keydown(function(event){
    if (event.keyCode === 39){
      distanceFromLeft +=25;
      $('#cat').css('left', distanceFromLeft);
    }
    if (event.keyCode === 37){
      distanceFromLeft -=25;
      $('#cat').css('left', distanceFromLeft);
    }


    if (event.keyCode === 38){
      distanceFromTop -=25;
      $('#cat').css('top', distanceFromTop);
    }
    if (event.keyCode === 40){
      distanceFromTop +=25;
      $('#cat').css('top', distanceFromTop);
    }
    if (distanceFromTop === 775 && (distanceFromLeft===375|| distanceFromLeft===650|| distanceFromLeft===50)){
      // $('#help1').show();
    var random =Math.random();{
    if (random<0.25){
      $("#help1").show();
    }else if (random < 0.5 && random > 0.25){
        $("#help2").show();
    }else if(random<0.75 && random > 0.5){
        $("#help3").show();
    }else if (random < 1.0 && random > 0.75){
      $("#help4").show();
    }
    }
    }
  })
})
