// ANIMAÇÃO PAINEL E
let animation;

animation=bodymovin.loadAnimation({
    container: videoHero,
    renderer: 'svg',
    loop:true,
    autoplay:false,
    path: 'vid.json'
});


videoHero.onmouseover = function(){
    animation.play()
}


videoHero.onmouseleave= function(){
    animation.pause()
}