var buttonlen = document.querySelectorAll(".drum").length;
for (var i = 0; i < buttonlen; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
var but=this.innerHTML;
makesound(but);
makeflash(but);

});
}
document.addEventListener("keydown",function(event)
{
  makesound(event.key);
  makeflash(event.key);
});
function makesound(key)
{
    switch (key) {
      case 'w':
        var a1 = new Audio('sounds/crash.mp3');
        a1.play();
        break;

      case 's':
        var a2 = new Audio('sounds/kick-bass.mp3');
        a2.play();
        break;

      case 'd':
        var a3 = new Audio('sounds/snare.mp3');
        a3.play();

        break;
      case 'j':
        var a4= new Audio('sounds/tom-1.mp3');
        a4.play();


        break;
      case 'k':
        var a5 = new Audio('sounds/tom-2.mp3');
        a5.play();
          break;
      case 'l':
        var a6 = new Audio('sounds/tom-3.mp3');
        a6.play();
        break;
      case 'a':
        var a7 = new Audio('sounds/tom-4.mp3');
        a7.play();


        break;


      default:console.log("press button");
      }
  }
  function makeflash(flash)
  {
  var butpress = document.querySelector("."+flash);
  butpress.classList.add("pressed");
  setTimeout(function()
{
  butpress.classList.remove("pressed");
},60);
  }
