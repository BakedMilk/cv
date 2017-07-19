
$(".photo").dblclick(function (){
  console.log('moneyway');
  function show() {
  $( '<div style="position:absolute;" class="unselectable"><img class="unselectable" src="../cv/images/money.gif"</div>' ).appendTo($('.photo')).hide().fadeIn(1000);
  }
  function hide() {
  $(".unselectable").fadeOut(1000);
  };
  show();
  setTimeout(hide, 2000);

});