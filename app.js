let qwerty = document.getElementById('qwerty');
let phrase = document.getElementById('phrase');
let listOfLetters = document.getElementById('listOfLetters');
let overlay = document.getElementById('overlay');
let title = document.getElementsByClassName('title')[0];
let buttonReset = document.getElementsByClassName('btn__reset')[0];
let missed = 0;
let phrases = [
  'Trust your instincts', 
  'Do a barrel role', 
  'It is quiet too quiet', 
  'Use bombs wisely', 
  'You got an enemy on your tail', 
  'Suprise attack coming from above', 
  'I saw my life flash before my eyes'
];
let notSpace = new RegExp('[^ ]');
const keyrow = document.getElementsByClassName('keyrow');

buttonReset.addEventListener('click', () => {
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
    } else {
      li.classList.add("space");
    }
  }
}

const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray); 

const checkLetter = (button) => {
  // get all elements with the class of letter
  let lettersArray = document.getElementsByClassName('letter');
  // Pass the button to the checkLetter function, and store the letter returned inside of a variable called letterFound.
  let letterFound = null;
  // loop over the letters to see if to see if they match the letter in the button that was clicked
  for(let i = 0; i < lettersArray.length; i++) {
    // if button has the same value as any list item in the phraseArray with the class of letter, add a 'show' class to the list item. Otherwise, return null.
    if(button === lettersArray[i].textContent.toLowerCase()) {
      letterFound = button;
      lettersArray[i].classList.add("show");
    }
  }
  return letterFound;
}

// Use event delegation to listen only to button events from the keyboard. When a player chooses a letter, add the “chosen” class to that button so the same letter can’t be chosen twice. Note that button elements have an attribute you can set called “disabled” that when set to true will not respond to user clicks. See the MDN documentation for more details.
qwerty.addEventListener('click', (e) => {
  if(e.target.tagName.toLowerCase() === 'button') {
    e.target.classList.add('chosen');
    let keyClicked = e.target;
    keyClicked.setAttribute("disabled", "");
    keyClicked = keyClicked.textContent;
    checkLetter(keyClicked);
    if(checkLetter(keyClicked) === null) {
      let lis = document.querySelectorAll('#scoreboardList li');
      lis[0].parentNode.removeChild(lis[0]);
      missed++;
    }
    checkWin();
  }
})

const checkWin = () => {
  let letter = document.getElementsByClassName('letter').length;
  let show = document.getElementsByClassName('show').length;
  if(letter === show) {
    overlay.classList.add('win');
    overlay.style.display = 'block';
    title.textContent = 'You Win!';
    buttonReset.textContent = 'Play Again';
  } else if(missed === 5) {
    overlay.classList.add('lose');
    overlay.style.display = 'block';
    title.textContent = 'You Lose!'
    buttonReset.textContent = 'Play Again';
  }
}

