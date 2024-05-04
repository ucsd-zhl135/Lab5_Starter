// explore.js
let synth = window.speechSynthesis;
window.addEventListener('DOMContentLoaded', init);

function init() {
  console.log(synth.getVoices().length);
  for(let voice of synth.getVoices()){
    let option = document.createElement('option');
    option.value = voice.name;
    option.textContent = voice.name;
    document.getElementById('voice-select').appendChild(option);
  }
  document.querySelector('button').addEventListener('click',function(){
    let ut = new SpeechSynthesisUtterance(document.querySelector('textarea').value);
    let select = document.querySelector('select');
    let name = select.options[select.selectedIndex].value;
    ut.voice = synth.getVoices().find((voice) => voice.name == name);
    ut.onstart = function(){
      document.querySelector('img').src = "assets/images/smiling-open.png";
    };
    ut.onend = function(){
      document.querySelector('img').src = "assets/images/smiling.png";
    };
    synth.speak(ut);
    
  });
}