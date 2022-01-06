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
      sayHi.style.display="none";
    } 
    else
    if(mediaQueryPcL.matches && speechRec.resultValue && speechRec.resultString == "hi"){
      pHero.style.display= "none";
      pHidenHero.style.display= "block";
    }
     else 
    if(mediaQueryMobile.matches && speechRec.resultValue && speechRec.resultString == "it's my pleasure"){
      h1Hero.style.display= "block";
      pHero.style.display= "none";
    } 
  }
}


