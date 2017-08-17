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
    if (distanceFromTop === 775){
      $('#help1').show();
    }
//     function getPos(el) {
//     // yay readability
//     for (var lx=0, ly=0;
//          el != null;
//          lx += el.offsetLeft, ly += el.offsetTop, el = el.offsetParent);
//     return {x: lx,y: ly};
// }
  });
});
