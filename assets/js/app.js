document.documentElement.style.cursor = 'none';

// gsap rotation

gsap.to("#star", {
    rotation: 360,
    duration: 20,
    ease: "linear",
    repeat: -1,
    transformOrigin: "50% 50%"
});

// gsap cursor

gsap.set(".cursor", { xPercent: -50, yPercent: -50 });

let xToCursor = gsap.quickTo(".cursor", "x", { duration: 0.4, ease: "power3" }),
    yToCursor = gsap.quickTo(".cursor", "y", { duration: 0.4, ease: "power3" });

window.addEventListener("mousemove", (e) => {
    xToCursor(e.clientX);
    yToCursor(e.clientY);
});

//

function sleep(seconds) {
    return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
  }
  
  const loading = document.querySelector(".loading");
  
  window.addEventListener('load', function () {
    sleep(1).then(() => {
      loading.classList.add('hidden');
      setTimeout(() => {
        loading.style.display = 'none';
      }, 500);
    });
  });

// canvas

let alertBox = document.getElementById("alert-box");

const resizeCanvas = (canvas, card) => {
    canvas.width = card.clientWidth;
    canvas.height = card.clientHeight;
    init(canvas);
};

const init = (canvas) => {
    let context = canvas.getContext("2d");
    let gradientColor = context.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradientColor.addColorStop(0, "#440001");
    gradientColor.addColorStop(1, "#121010");
    context.fillStyle = gradientColor;
    context.fillRect(0, 0, canvas.width, canvas.height);
};

const images = [
    { src: "assets/img/0.png", number: 0 },
    { src: "assets/img/0.png", number: 0 },
    { src: "assets/img/0.png", number: 0 },
    { src: "assets/img/0.png", number: 0 },
    { src: "assets/img/0.png", number: 0 },
    { src: "assets/img/0.png", number: 0 },
    { src: "assets/img/0.png", number: 0 },
    { src: "assets/img/0.png", number: 0 },
    { src: "assets/img/0.png", number: 0 },
    { src: "assets/img/0.png", number: 0 },
    { src: "assets/img/0.png", number: 0 },
    { src: "assets/img/0.png", number: 0 },
    { src: "assets/img/0.png", number: 0 },
    { src: "assets/img/0.png", number: 0 },
    { src: "assets/img/0.png", number: 0 },
    { src: "assets/img/15.png", number: 15 },
    { src: "assets/img/15.png", number: 15 },
    { src: "assets/img/15.png", number: 15 },
    { src: "assets/img/15.png", number: 15 },
    { src: "assets/img/15.png", number: 15 },
    { src: "assets/img/15.png", number: 15 },
    { src: "assets/img/15.png", number: 15 },
    { src: "assets/img/15.png", number: 15 },
    { src: "assets/img/15.png", number: 15 },
    { src: "assets/img/15.png", number: 15 },
    { src: "assets/img/15.png", number: 15 },
    { src: "assets/img/15.png", number: 15 },
    { src: "assets/img/15.png", number: 15 },
    { src: "assets/img/15.png", number: 15 },
    { src: "assets/img/15.png", number: 15 },
    { src: "assets/img/15.png", number: 15 },
    { src: "assets/img/15.png", number: 15 },
    { src: "assets/img/15.png", number: 15 },
    { src: "assets/img/25.png", number: 25 },
    { src: "assets/img/25.png", number: 25 },
    { src: "assets/img/25.png", number: 25 },
    { src: "assets/img/25.png", number: 25 },
    { src: "assets/img/25.png", number: 25 },
    { src: "assets/img/25.png", number: 25 },
    { src: "assets/img/25.png", number: 25 },
    { src: "assets/img/25.png", number: 25 },
    { src: "assets/img/25.png", number: 25 },
    { src: "assets/img/25.png", number: 25 },
    { src: "assets/img/25.png", number: 25 },
    { src: "assets/img/25.png", number: 25 },
    { src: "assets/img/25.png", number: 25 },
    { src: "assets/img/25.png", number: 25 },
    { src: "assets/img/25.png", number: 25 },
    { src: "assets/img/25.png", number: 25 },
    { src: "assets/img/25.png", number: 25 },
    { src: "assets/img/25.png", number: 25 },
    { src: "assets/img/25.png", number: 25 },
    { src: "assets/img/25.png", number: 25 },
    { src: "assets/img/25.png", number: 25 },
    { src: "assets/img/25.png", number: 25 },
    { src: "assets/img/25.png", number: 25 },
    { src: "assets/img/25.png", number: 25 },
    { src: "assets/img/35.png", number: 35 },
    { src: "assets/img/35.png", number: 35 },
    { src: "assets/img/35.png", number: 35 },
    { src: "assets/img/35.png", number: 35 },
    { src: "assets/img/35.png", number: 35 },
    { src: "assets/img/35.png", number: 35 },
    { src: "assets/img/35.png", number: 35 },
    { src: "assets/img/35.png", number: 35 },
    { src: "assets/img/35.png", number: 35 },
    { src: "assets/img/35.png", number: 35 },
    { src: "assets/img/35.png", number: 35 },
    { src: "assets/img/35.png", number: 35 },
    { src: "assets/img/35.png", number: 35 },
    { src: "assets/img/35.png", number: 35 },
    { src: "assets/img/35.png", number: 35 },
    { src: "assets/img/35.png", number: 35 },
    { src: "assets/img/35.png", number: 35 },
    { src: "assets/img/35.png", number: 35 },
    { src: "assets/img/35.png", number: 35 },
    { src: "assets/img/35.png", number: 35 },
    { src: "assets/img/35.png", number: 35 },
    { src: "assets/img/35.png", number: 35 },
    { src: "assets/img/35.png", number: 35 },
    { src: "assets/img/35.png", number: 35 },
    { src: "assets/img/35.png", number: 35 },
    { src: "assets/img/35.png", number: 35 },
    { src: "assets/img/35.png", number: 35 },
    { src: "assets/img/35.png", number: 35 },
    { src: "assets/img/35.png", number: 35 },
    { src: "assets/img/50.png", number: 50 },
    { src: "assets/img/50.png", number: 50 },
    { src: "assets/img/50.png", number: 50 },
    { src: "assets/img/50.png", number: 50 },
    { src: "assets/img/50.png", number: 50 },
    { src: "assets/img/50.png", number: 50 },
    { src: "assets/img/50.png", number: 50 },
    { src: "assets/img/50.png", number: 50 },
    { src: "assets/img/50.png", number: 50 },
    { src: "assets/img/50.png", number: 50 },
    { src: "assets/img/50.png", number: 50 },
    { src: "assets/img/50.png", number: 50 },
    { src: "assets/img/50.png", number: 50 },
    { src: "assets/img/50.png", number: 50 },
    { src: "assets/img/50.png", number: 50 },
];

let selectedIndexes = new Set();
while (selectedIndexes.size < 3) {
    selectedIndexes.add(Math.floor(Math.random() * images.length));
}

let indexesArray = Array.from(selectedIndexes);

const selectedImage1 = images[indexesArray[0]];
const selectedImage2 = images[indexesArray[1]];
const selectedImage3 = images[indexesArray[2]];

document.getElementById("randomImage").src = selectedImage1.src;
document.getElementById("randomImage2").src = selectedImage2.src;
document.getElementById("randomImage3").src = selectedImage3.src;

let totalSum = localStorage.getItem("totalSum");
totalSum = totalSum = 0;

if (isNaN(totalSum)) {
    totalSum = 0;
}

const number1 = selectedImage1?.number || 0;
const number2 = selectedImage2?.number || 0;
const number3 = selectedImage3?.number || 0;

totalSum += number1 + number2 + number3;
localStorage.setItem("totalSum", totalSum);
document.getElementById("total-sum").innerText = totalSum;

window.onload = () => {
    let clearedCanvases = [false, false, false];
    let cards = document.querySelectorAll(".card");
    cards.forEach((card, index) => {
        let canvas = card.querySelector("canvas");
        resizeCanvas(canvas, card);

        let context = canvas.getContext("2d");
        let rectLeft = canvas.getBoundingClientRect().left;
        let rectTop = canvas.getBoundingClientRect().top;

        let mouseX = 0;
        let mouseY = 0;
        let isDragged = false;

        let events = {
            mouse: { down: "mousedown", move: "mousemove", up: "mouseup" },
            touch: { down: "touchstart", move: "touchmove", up: "touchend" }
        };

        let deviceType = "";

        const isTouchDevice = () => {
            try {
                document.createEvent("TouchEvent");
                deviceType = "touch";
                return true;
            } catch (e) {
                deviceType = "mouse";
                return false;
            }
        };

        const getXY = (e) => {
            mouseX = (!isTouchDevice() ? e.pageX : e.touches[0].pageX) - rectLeft;
            mouseY = (!isTouchDevice() ? e.pageY : e.touches[0].pageY) - rectTop;
        };

        isTouchDevice();

        canvas.addEventListener(events[deviceType].down, (event) => {
            isDragged = true;
            getXY(event);
            scratch(mouseX, mouseY, context);
        });

        canvas.addEventListener(events[deviceType].move, (event) => {
            if (!isTouchDevice()) {
                event.preventDefault();
            }
            if (isDragged) {
                getXY(event);
                scratch(mouseX, mouseY, context);
            }
        });

        canvas.addEventListener(events[deviceType].up, () => {
            isDragged = false;
            let value = [selectedImage1.number, selectedImage2.number, selectedImage3.number][index];
            checkScratchPercentage(canvas, context, value);
        });

        canvas.addEventListener("mouseleave", () => {
            isDragged = false;
        });

        const scratch = (x, y, context) => {
            context.globalCompositeOperation = "destination-out";
            context.beginPath();
            context.arc(x, y, 60, 0, 2 * Math.PI);
            context.fill();
        };
        const checkScratchPercentage = (canvas, context, index) => {
            let imageData = context.getImageData(0, 0, canvas.width, canvas.height);
            let totalPixels = imageData.data.length / 4;
            let scratchedPixels = 0;
        
            for (let i = 0; i < imageData.data.length; i += 4) {
                if (imageData.data[i + 3] < 128) { 
                    scratchedPixels++;
                }
            }
        
            let scratchedPercentage = (scratchedPixels / totalPixels) * 100;
        
            if (scratchedPercentage > 70 && !clearedCanvases[index]) {
                clearedCanvases[index] = true;
                clearCanvasRadially(canvas, context, () => checkAllCleared());
            }
        };

        const clearCanvasRadially = (canvas, context) => {
            let radius = 0;
            let maxRadius = Math.hypot(canvas.width, canvas.height);
            let centerX = canvas.width / 2;
            let centerY = canvas.height / 2;

            let interval = setInterval(() => {
                context.globalCompositeOperation = "destination-out";
                context.beginPath();
                context.arc(centerX, centerY, radius, 0, 2 * Math.PI);
                context.fill();
        
                radius += 20;
        
                if (radius > maxRadius) {
                    clearInterval(interval);
                    context.clearRect(0, 0, canvas.width, canvas.height);
                    callback(); 
                }
            }, 30);
        };

        document.getElementById("total-sum").style.display = "none";
        const checkAllCleared = ( status = status) => {
            if (clearedCanvases.every(status => status)) {
                document.getElementById("total-sum").style.display = "block";
            }
        };

    });
};