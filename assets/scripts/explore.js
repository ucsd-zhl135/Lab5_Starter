// explore.js
let synth = window.speechSynthesis;
window.addEventListener('DOMContentLoaded', init);


function addVoices(){
  console.log(synth.getVoices().length);
  let select = document.getElementById('voice-select');
  for(let voice of synth.getVoices()){
    let option = document.createElement('option');
    option.value = voice.name;
    option.textContent = voice.name;
    select.appendChild(option);
  }
}
function init() {
  addVoices();
  synth.onvoiceschanged = addVoices;
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