// expose.js
const jsConfetti = new JSConfetti();

window.addEventListener('DOMContentLoaded', init);
function init() {
  document.querySelector('button').addEventListener('click',function(){
    let audio = document.querySelector('audio');
    audio.pause(); audio.currentTime = 0;
    audio.play();
    if(document.getElementById("horn-select").value == "party-horn") jsConfetti.addConfetti();
  });
  document.getElementById("horn-select").addEventListener('input', function(){
    let typeImg = document.querySelector('img');
    typeImg.src = "assets/images/" + this.value + ".svg";
    document.querySelector('audio').src = "assets/audio/" + this.value + ".mp3";
  });
  document.getElementById("volume").addEventListener('input', function(){
    document.querySelector('audio').volume = this.value / 100;
    let volImg = this.parentElement.querySelector('img');
    let level = 0;
    if(this.value == 0) level = 0;
    else if(this.value < 33) level = 1;
    else if(this.value < 67) level = 2;
    else level = 3;
    volImg.src = "assets/icons/volume-level-" + level.toString() + ".svg";
  });
}