// Get references to DOM elements
let textOutput = document.querySelector("#vtt-textarea");
let emptystring = '';
let languageSelect = document.querySelector("#languageSelect");

// Initialize SpeechRecognition object
const recognition = new webkitSpeechRecognition();
recognition.continuous = true;

// Event listener for when speech is recognized
recognition.onresult = function(event) {
  // Update the recognition language
  recognition.lang = languageSelect.value;
  
  // Get the latest speech-to-text result
  const speechToText = event.results[event.results.length - 1][0].transcript;
  
  // Append the recognized text to the existing string
  emptystring += speechToText;
  console.log(emptystring);
  
  // Update the text output element with the new string
  textOutput.value = emptystring;
  console.log(textOutput);
};

// Event listener for errors
recognition.onerror = function(event) {
  console.error('Speech recognition error:', event.error);
};

// Start recognition when the start button is clicked
const startRecognitionButton = document.querySelector('#startRecognitionButton');
startRecognitionButton.addEventListener('click', () => {
  recognition.lang = languageSelect.value;
  recognition.start();
  console.log('Speech recognition started');
  console.log(languageSelect.value);
  console.log(textOutput.value);
});

// Stop recognition when the stop button is clicked
const stopRecognitionButton = document.querySelector('#stopRecognitionButton');
stopRecognitionButton.addEventListener('click', () => {
  recognition.stop();
  console.log('Speech recognition stopped');
  // emptystring = ''; // Reset the emptystring variable
});

// Update emptystring when the user edits the text output manually
textOutput.addEventListener('input', () => {
  emptystring = textOutput.value;
});

let convert = document.querySelector("#convert")
convert.onclick = ()=>{
  window.location= "../main.html"
}
