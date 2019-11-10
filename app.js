const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text = intro.querySelector('h1');
// section is over
const section = document.querySelector('section');
const video2 = section.querySelector('video')

const sectionlast = document.querySelector('.last');
const video3 = sectionlast.querySelector('video')

//scrolling stuff
const controller = new ScrollMagic.Controller();

//scene
const scene = new ScrollMagic.Scene({
    duration: 2000,
    triggerElement: intro,
    triggerHook: 0.
})
.setPin(intro)
.addTo(controller);

const scene2 = new ScrollMagic.Scene({
    duration: 2000,
    triggerElement: section,
    triggerHook: 0.
})
.setPin(section)
.addTo(controller);

const scene3 = new ScrollMagic.Scene({
    duration: 2000,
    triggerElement: sectionlast,
    triggerHook: 0.
})
.setPin(sectionlast)
.addTo(controller);

//video animation
let accellAmount = 0.1;
let scroll_pos = 0;
let delay = 0;
let delay2 = 0;
let delay3 = 0;

scene.on('update', e => {
    scroll_pos = e.scrollPos/1000;
});

let scroll_pos2 = 0;

scene2.on('update', e => {
    scroll_pos2 = e.scrollPos/1000;
});

let scroll_pos3 = 1000;

scene3.on('update', e => {
    scroll_pos3 = e.scrollPos/1000;
});

setInterval(()=>{
    delay += (scroll_pos -delay)*accellAmount;
    video.currentTime = delay;
    delay3 += (scroll_pos3 -delay3)*accellAmount;
    video3.currentTime = delay3;
    delay2 += (scroll_pos2 -delay2)*accellAmount;
    video2.currentTime = delay2;
}, 33.3);


