const button = document.getElementById('button');
const audioElement = document.getElementById('audio');
const text=document.querySelector('input[type="text"]')

// Disable/Enable Button
function toggleButton() {
  button.disabled = !button.disabled;
}

// VoiceRSS Speech Function
function tellMe(speech) {
  const speechString = speech.trim().replace(/ /g, '%20');
  // VoiceRSS Speech Parameters
  VoiceRSS.speech({
    key: '58bc94adba5a466888bb92ccfc93ed84',
    src: speechString,
    hl: 'hi-in',
    r: 0,
    c: 'mp3',
    f: '44khz_16bit_stereo',
    ssml: false,
  });
}

// Get jokes from Joke API
async function getSpeech() {
  let speech = '';
  speech=text.value;
  text.value='';
  console.log(speech);
  tellMe(speech);
  toggleButton();
}

// Event Listeners
button.addEventListener('click', getSpeech);
audioElement.addEventListener('ended', toggleButton);
