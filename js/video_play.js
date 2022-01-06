animation=bodymovin.loadAnimation({
    container: videoHero,
    renderer: 'svg',
    loop:true,
    autoplay:false,
    path: video
});

videoHero.onmouseover = function(){
    animation.play()
}


videoHero.onmouseleave= function(){
    animation.pause()
}