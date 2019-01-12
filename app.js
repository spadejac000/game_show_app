let qwerty = document.getElementById('qwerty');
let phrase = document.getElementById('phrase');
let listOfLetters = document.getElementById('listOfLetters');
let missed = 0;
let phrases = ['Trust your instincts', 'Do a barrel role', 'It is quiet too quiet', 'Use bombs wisely', 'You got an enemy on your tail', 'Suprise attack coming from above', 'I saw my life flash before my eyes'];
let notSpace = new RegExp('[^ ]');

document.getElementsByClassName('btn__reset')[0].addEventListener('click', () => {
  document.getElementById('overlay').style.display = 'none';
})

const getRandomPhraseAsArray = (arr) => {
  //do stuff to any arr that is passed in
  let randomArray = arr[Math.floor(Math.random() * arr.length)];
  return randomArray.split("");
} 

const addPhraseToDisplay = (arr) => {
  // do stuff any arr that is passed in, and add to `#phrase ul`
  for(let i = 0; i < arr.length; i++) {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(arr[i]));
    listOfLetters.appendChild(li);
    if(notSpace.test(arr[i])) {
      li.classList.add("letter");
    }
  }
}

const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray); 

const checkLetter = (keyClicked) => {
  // get all elements with the class of letter

  // loop over the letters to see if to see if they match the letter in the button that was clicked

  // if keyClicked has the same value as any list item in the phraseArray with the class of letter, add a 'show' class to the list item. Otherwise, return null.
}