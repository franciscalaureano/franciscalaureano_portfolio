// A2Z F18
// Daniel Shiffman
// http://shiffman.net/a2z
// https://github.com/shiffman/A2Z-F18
/*getAudioContext();



function draw(){
  if(getAudioContext().state == 'show'){
   pHero.style.display= "block";
    h1Hero.style.display= "none";
  }
}*/

let speech;

function setup() {
  noCanvas();
  // Create a Speech Recognition object with callback
  speechRec = new p5.SpeechRec('en-US', gotSpeech);
  // "Continuous recognition" (as opposed to one time only)
  let continuous = true;
  // If you want to try partial recognition (faster, less accurate)
  let interimResults = false;
  // This must come after setting the properties
  speechRec.start(continuous, interimResults);

  // DOM element to display results
  let output = select('#speech');

  // Speech recognized event
  function gotSpeech() {
    // Something is there
    // Get it as a string, you can also get JSON with more info
    //console.log(speechRec);
   
    if (mediaQueryMobile.matches && speechRec.resultValue && speechRec.resultString == "hi" ) {
      h1Hero.style.display= "none";
      pHero.style.display= "block";
    } else if(mediaQueryMobile.matches && speechRec.resultValue && speechRec.resultString == "it's my pleasure"){
      h1Hero.style.display= "block";
      pHero.style.display= "none";
    }
  }
}



/*// Speech Object
let speech;

function setup() {
  noCanvas();
  // Create a Speech Recognition object with callback
  speechRec = new p5.SpeechRec('en-US', gotSpeech);
  // "Continuous recognition" (as opposed to one time only)
  let continuous = true;
  // If you want to try partial recognition (faster, less accurate)
  let interimResults = false;
  // This must come after setting the properties
  speechRec.start(continuous, interimResults);

  // DOM element to display results
  let output = select('#speech');

  // Speech recognized event
  function gotSpeech() {
    // Something is there
    // Get it as a string, you can also get JSON with more info
    console.log(speechRec);
    if (speechRec.resultValue) {
      let said = speechRec.resultString;
      // Show user
      output.html(said);
    }
  }
}*/
