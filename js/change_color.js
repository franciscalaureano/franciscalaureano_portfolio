//------------------------ ONCLICK -------------------------

buttonP.onclick = function(){
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
}


buttonB.onclick = function(){
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


buttonL.onclick = function(){
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

//------------------------ MOUSEOVER -------------------------
// PINK
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
// BLUE
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
// LILAC
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


// SOCIAL ICONS
//insta
insta.onmouseover = function(){
    insta.style.opacity="100%";
    insta.style.transitionDuration="0.5s";
}
insta.onmouseleave = function(){
    insta.style.opacity="50%";
    insta.style.transitionDuration="0.5s";
}
//behance
behance.onmouseover = function(){
    behance.style.opacity="100%";
    behance.style.transitionDuration="0.5s";
}
behance.onmouseleave = function(){
    behance.style.opacity="50%";
    behance.style.transitionDuration="0.5s";
}
//linkedin
linkedin.onmouseover = function(){
    linkedin.style.opacity="100%";
    linkedin.style.transitionDuration="0.5s";
}
linkedin.onmouseleave = function(){
    linkedin.style.opacity="50%";
    linkedin.style.transitionDuration="0.5s";
}
  
    
  