const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true
});


function swiper(){
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    // alignment:column,
    keyboard: {
      enabled: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

}
const synth = window.speechSynthesis;
let voices = [];
let voiceSelect = document.querySelector("select");

// Fetch voices asynchronously

synth.onvoiceschanged = () => {
  voices = synth.getVoices();
  console.log("Voices available:");
  voices.forEach((voice, index) => (voiceSelect.options[index]= new Option(voice.name,index))); // Log index and voice name for reference

  // Assuming `newVoice` is an array-like structure containing elements
  const newVoice = document.querySelectorAll('.swiper-slide'); // Replace '.voice-button' with your actual selector
  // Add click event listeners to each voice button
  newVoice.forEach((voiceButton, index) => {
      let flag=0;
      voiceButton.onclick = () => {
         
        if(flag==0){
          // Create SpeechSynthesisUtterance instance
          const utterance = new SpeechSynthesisUtterance("In a world brimming with possibilities, you shine brightly with your unique blend of talents and passions. Your journey is a tapestry of courage, kindness, and unwavering determination. Embrace each moment with grace, knowing your presence makes a profound difference.");
          utterance.voice = voices[index];

          // Speak the utterance
          synth.speak(utterance);
          flag=1;
        }
        else{
          synth.cancel()
          flag=0;
        }
          
      };
  });
};


let start = document.querySelector("#start");

start.onclick = ()=>{
  setTimeout(() => {
    window.location= "main/main.html"
  }, 2000);
}


swiper();





