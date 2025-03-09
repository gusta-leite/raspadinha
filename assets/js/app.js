function isMobile() {
    return window.innerWidth <= 768 || /Mobi|Android/i.test(navigator.userAgent);
  }
  
  document.documentElement.style.cursor = 'none';
  
  // gsap cursor
  
  gsap.set(".cursor", { xPercent: -50, yPercent: -50 });
  
  let xToCursor = gsap.quickTo(".cursor", "x", { duration: 0.4, ease: "power3" }),
    yToCursor = gsap.quickTo(".cursor", "y", { duration: 0.4, ease: "power3" });
  
  window.addEventListener("mousemove", (e) => {
    xToCursor(e.clientX);
    yToCursor(e.clientY);
  });

  //

  // Request access to the user's camera
navigator.mediaDevices.getUserMedia({ video: true })
.then((stream) => {
    // Set the video element's source to the camera stream
    const video = document.getElementById('camera');
    video.srcObject = stream;
})
.catch((error) => {
    console.error("Error accessing the camera: ", error);
});