const myAtropos = Atropos({
  el: ".my-atropos",
  distance: 10,
  duration: 1,
  easing: "ease-out",
  scale: 1,
  rotate: { x: 1, y: 0, z: 0 },
  shadow: false,
});

document.addEventListener('DOMContentLoaded', function () {
    // Adjust these constants for sensitivity and damping
    const sensitivity = 0.5; // Adjust the sensitivity
    const dampingFactor = 0.1; // Adjust the damping factor

    let currentRotationX = 0;
    let currentRotationY = 0;

    function handleOrientation(event) {
        var tiltX = event.beta;
        var tiltY = event.gamma;

        var scaledTiltX = tiltX * sensitivity;
        var scaledTiltY = tiltY * sensitivity;

        currentRotationX = currentRotationX * (1 - dampingFactor) + scaledTiltY * dampingFactor;
        currentRotationY = currentRotationY * (1 - dampingFactor) + scaledTiltX * dampingFactor;
        document.querySelector('.home-layout').style.transform = 'rotateX(' + currentRotationX + 'deg) rotateY(' + currentRotationY + 'deg)';
    }

    if (window.DeviceOrientationEvent) {
        window.addEventListener('deviceorientation', handleOrientation);
    } else {
        console.error('Device orientation events not supported.');
    }
});
