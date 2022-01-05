

//
buttonP.onmouseover = function(){
    buttonP.style.opacity="100%";
    buttonP.style.transitionProperty="opacity";
    buttonP.style.transitionDuration="0.5s";
}
buttonP.onmouseleave = function(){
    buttonP.style.opacity="30%";
    buttonP.style.transitionProperty="opacity";
    buttonP.style.transitionDuration="0.5s";
}
buttonP.onclick = function(){
    buttonP.style.border= "3px solid #B5756F";
    buttonP.style.opacity="100%";
    buttonB.style.border= "none";
    buttonB.style.opacity="30%";
    buttonL.style.border= "none";
    buttonL.style.opacity="30%";
    //
    logo.src="img/logo_pink.png";
    //
	h1Hero.style.color = "#D18F89";
    pHero.style.color = "#A1BFE9";
    /*imgHero.src="img/laureano_hero_pink.png";
    if (mediaQueryMobile.matches) {
    
        imgHero.src="img/mobile_laureano_hero_pink.png";
     }*/
    //
    h1Work.style.color = "#D18F89";
    //
    h1About.style.color = "#D18F89";
}

//
buttonB.onmouseover = function(){
    buttonB.style.opacity="100%";
    buttonB.style.transitionProperty="opacity";
    buttonB.style.transitionDuration="0.5s";
}
buttonB.onmouseleave = function(){
    buttonB.style.opacity="30%";
    buttonB.style.transitionProperty="opacity";
    buttonB.style.transitionDuration="0.5s";
}
buttonB.onclick = function(){
    buttonP.style.border= "none";
    buttonP.style.opacity="30%";
    buttonB.style.border= "3px solid #84A2CC";
    buttonB.style.opacity="100%";
    buttonL.style.border= "none";
    buttonL.style.opacity="30%";
    //
    logo.src="img/logo_blue.png";
    //
	h1Hero.style.color = "#A1BFE9";
    pHero.style.color = "#D18F89";
   /* imgHero.src= "img/laureano_hero_blue.png"; 
    if (mediaQueryMobile.matches) {
    
        imgHero.src="img/mobile_laureano_hero_pink.png";
     }*/
    //
    h1Work.style.color = "#A1BFE9";
    //
    h1About.style.color = "#A1BFE9";
}

//
buttonL.onmouseover = function(){
    buttonL.style.opacity="100%";
    buttonL.style.transitionProperty="opacity";
    buttonL.style.transitionDuration="0.5s";
}
buttonL.onmouseleave = function(){
    buttonL.style.opacity="30%";
    buttonL.style.transitionProperty="opacity";
    buttonL.style.transitionDuration="0.5s";
}
buttonL.onclick = function(){
    buttonP.style.border= "none";
    buttonP.style.opacity="30%";
    buttonB.style.border= "none";
    buttonB.style.opacity="30%";
    buttonL.style.border= "3px solid #9E88CD";
    buttonL.style.opacity="100%";
    //
    logo.src="img/logo_blue.png";
    //
	h1Hero.style.color = "#B8A5E1";
    pHero.style.color = "#D18F89";
   /* imgHero.src="img/laureano_hero_lilac.png";
    if (mediaQueryMobile.matches) {
    
        imgHero.src="img/mobile_laureano_hero_pink.png";
     }*/
    //
    h1Work.style.color = "#B8A5E1";
    //
    h1About.style.color = "#B8A5E1";
   
}

