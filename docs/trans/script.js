const button = document.getElementById('button');
const text=document.querySelector('input[type="text"]')
const transword=document.getElementById('transword');





 function getTranslate() {
  let speech = '';
  speech=text.value;
  text.value='';
  data=dictionary;
  let word=data[speech].meanings[0].def;
  console.log(word);
  transword.textContent=word;
}

// Event Listeners
button.addEventListener('click', getTranslate);
