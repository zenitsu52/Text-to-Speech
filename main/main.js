let speech = new SpeechSynthesisUtterance();
let synth = window.speechSynthesis;
let voices=[];
let listen = document.querySelector("button");
let textInput = document.querySelector("#tts-textarea");
let voiceSelect = document.querySelector("select");
// let video = document.querySelector("video")

synth.onvoiceschanged = ()=>{
    voices = synth.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice,i)=>{
      (voiceSelect.options[i])= new Option(voice.name,i)
    })
}

voiceSelect.onchange = ()=>{
    speech.voice = voices[voiceSelect.value];
}

let flag = 0;
listen.onclick = ()=>{
    if(flag==0){
      speech.text=textInput.value;
      synth.speak(speech)
      flag=1;
    }
      else{
         synth.cancel();
         flag=0;
      }
    
}

let loader = document.querySelector("#loader")
    setTimeout(function(){
      loader.style.top ="-100%";
    },4000)




let recognise = document.querySelector("#recognise")
let convert = document.querySelector("#convert")
let converter = document.querySelector("#converter")
let recogniser = document.querySelector("#recogniser")



recognise.onclick = ()=>{
    window.location= "VTT/vtt.html"
}


