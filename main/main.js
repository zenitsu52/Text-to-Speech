let speech = new SpeechSynthesisUtterance();
let synth = window.speechSynthesis
let voices=[];
let listen = document.querySelector("button");
let textInput = document.querySelector("textarea");
let voiceSelect = document.querySelector("select")
let video = document.querySelector("video")

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



listen.onclick = ()=>{
    speech.text=textInput.value;
    synth.speak(speech)
    if(textInput.value==""){

    }else{
    video.style.display = "block";
    }
}

textInput.onclick =()=>{
    video.style.display = "none";
}

let loader = document.querySelector("#loader")
    setTimeout(function(){
      loader.style.top ="-100%";
    },4000)


// let download = document.querySelector("#download")
//     download.onclick = () => {
//         if (speech.text !== "") {
//             // Create a new SpeechSynthesisUtterance object with the same properties
//             let downloadSpeech = new SpeechSynthesisUtterance(speech.text);
//             downloadSpeech.voice = speech.voice;
    
//             // Synthesize and download the audio
//             let audioBlob = new Blob([new TextEncoder().encode(downloadSpeech.text)], {
//                 type: 'text/plain'
//             });
//             let url = URL.createObjectURL(audioBlob);
    
//             // Create a temporary anchor element to trigger the download
//             let a = document.createElement("a");
//             a.style.display = "none";
//             a.href = url;
//             a.download = "synthesized_audio.wav"; // You can change the file name and extension here
//             document.body.appendChild(a);
//             a.click();
//             window.URL.revokeObjectURL(url);
//             document.body.removeChild(a);
//         }
//     };