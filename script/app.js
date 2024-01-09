const myAtropos = Atropos({
  el: ".my-atropos",
  distance: 10,
  duration: 1,
  easing: "ease-out",
  scale: 1,
  rotate: { x: 1, y: 0, z: 0 },
  shadow: false,
});

document.addEventListener("DOMContentLoaded", function () {
  function handleOrientation(event) {
    var tiltX = event.beta;
    var tiltY = event.gamma;

    document.querySelector(".home-layout").style.transform =
      "rotateX(" + tiltY + "deg) rotateY(" + tiltX + "deg)";
  }

  if (window.DeviceOrientationEvent) {
    window.addEventListener("deviceorientation", handleOrientation);
  } else {
    console.error("Device orientation events not supported.");
  }
});
