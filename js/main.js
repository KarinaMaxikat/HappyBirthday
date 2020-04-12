var w = window.innerWidth;
var photoTl, videoTl, controller;

function setPhotosAnimation() {

  photoTl = new TimelineMax({onUpdate: function() {photoTl.progress()}});

  photoTl.from(
    ".photo-gallery-item:nth-of-type(1)",
    .7, {x: -0.15*w, opacity: 0}
  );
  photoTl.from(
    ".photo-gallery-item:nth-of-type(2)",
    .7, {x: 0.15*w, opacity: 0}, "=-.7"
  );
}

function setVideoAnimation() {

  videoTl = new TimelineMax({onUpdate: function() {videoTl.progress()}});

  videoTl.to(
    ".banner h2", 10,
    {
      "transform": "scale(78)",
      "-webkit-transform": "scale(78)",
      "-ms-transform": "scale(78)",
      "left": "-30%"
    },
    "=.2"
  );
  videoTl.from(
    ".banner h3",
    2, {opacity: 0},
  );
}

setPhotosAnimation()
setVideoAnimation()

controller = new ScrollMagic.Controller()

const photoGallery = new ScrollMagic
  .Scene({
    triggerElement: '.photo-gallery-trigger',
    triggerHook: 0.7,
    duration: "85%"
  })
  .setTween(photoTl)
  .addTo(controller)

const videoGallery = new ScrollMagic
  .Scene({
    triggerElement: '.video-gallery-trigger',
    triggerHook: 0,
    duration: 8000
  })
  .setPin('.video-gallery')
  .setTween(videoTl)
  .addTo(controller)

$('#scratch').wScratchPad({
  size: 0.1*w,
  bg: './img/scratch.jpg',
  fg: '#000',
  cursor: 'crosshair'
});


$(window).resize(function() {
  $('#scratch').wScratchPad('reset');
  w = window.innerWidth;
})
