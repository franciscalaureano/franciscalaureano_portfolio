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
     } else
      if(mediaQueryPcL.matches && speechRec.resultValue && speechRec.resultString == "pink"){
        buttonP.style.border= "3px solid #B5756F";
    buttonP.style.opacity="100%";
    buttonB.style.border= "none";
    buttonB.style.opacity="30%";
    buttonL.style.border= "none";
    buttonL.style.opacity="30%";
    //
    footer.style.backgroundColor= "#E0C4BE";
    //
    logo.src="img/logo_pink.png";
    //
    sayHi.src="img/say_hi_blue.png";
    //
	h1Hero.style.color = "#D18F89";
    pHero.style.color = "#A1BFE9";
    //
    insta.src="img/instagram.png";
    behance.src="img/behance.png";
    linkedin.src="img/linkedin.png";
    //
    bodymovin.destroy();
    video='vid.json';
    animation=bodymovin.loadAnimation({
        container: videoHero,
        renderer: 'svg',
        loop:true,
        autoplay:false,
        path: video
    });
    //
    h1Work.style.color = "#D18F89";
    //
    h1About.style.color = "#D18F89";
     }else
    if(mediaQueryPcL.matches && speechRec.resultValue && speechRec.resultString == "blue"){
      buttonP.style.border= "none";
    buttonP.style.opacity="30%";
    buttonB.style.border= "3px solid #84A2CC";
    buttonB.style.opacity="100%";
    buttonL.style.border= "none";
    buttonL.style.opacity="30%";
    //
    footer.style.backgroundColor= "#CDD8E5";
    //
    logo.src="img/logo_blue.png";
    //
    sayHi.src="img/say_hi_pink.png";
    //
	h1Hero.style.color = "#A1BFE9";
    pHero.style.color = "#D18F89";
    //
    insta.src="img/instagram_blue.png";
    behance.src="img/behance_blue.png";
    linkedin.src="img/linkedin_blue.png";
    //
    bodymovin.destroy();
    video='vid_blue.json';
    animation=bodymovin.loadAnimation({
        container: videoHero,
        renderer: 'svg',
        loop:true,
        autoplay:false,
        path: video
    });
    //
    h1Work.style.color = "#A1BFE9";
    //
    h1About.style.color = "#A1BFE9";
    }
    else
    if(mediaQueryPcL.matches && speechRec.resultValue && speechRec.resultString == "lilac"){
      buttonP.style.border= "none";
      buttonP.style.opacity="30%";
      buttonB.style.border= "none";
      buttonB.style.opacity="30%";
      buttonL.style.border= "3px solid #9E88CD";
      buttonL.style.opacity="100%";
      //
      footer.style.backgroundColor= "#D6CDE2";
      //
      logo.src="img/logo_blue.png";
       //
       sayHi.src="img/say_hi_pink.png";
       //
    h1Hero.style.color = "#B8A5E1";
      pHero.style.color = "#D18F89";
      //
      insta.src="img/instagram_lilac.png";
      behance.src="img/behance_lilac.png";
      linkedin.src="img/linkedin_lilac.png";
      //
      bodymovin.destroy();
      video='vid_lilac.json';
      animation=bodymovin.loadAnimation({
          container: videoHero,
          renderer: 'svg',
          loop:true,
          autoplay:false,
          path: video
      });
      //
      h1Work.style.color = "#B8A5E1";
      //
      h1About.style.color = "#B8A5E1";
     
    } 
  }
}


