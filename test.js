const circleContainer = document.getElementById("circleContainer");
const ball = document.getElementById("ball");
ball.style.left = "39.3101px";
ball.style.top = "156.69px";

let isDragging = false;

ball.addEventListener("mousedown", (event) => {
  isDragging = true;
  ball.style.cursor = "grabbing";
});

document.addEventListener("mousemove", (event) => {
  if (isDragging) {
    const { clientX, clientY } = event;
    const { left, top, width, height } = circleContainer.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const angle = Math.atan2(clientY - centerY, clientX - centerX);
    const radius = width / 2 - ball.offsetWidth / 2;
    const posX = centerX + Math.cos(angle) * radius - ball.offsetWidth / 2;
    const posY = centerY + Math.sin(angle) * radius - ball.offsetHeight / 2;
    
    console.log(posX);
    console.log(posY);
    if (!(posX >= 40 && posY >= 158.5)) {
        // console.log("if is working");
        // isDragging=false
        ball.style.left = `${posX}px`;
        ball.style.top = `${posY}px`;
       
    }
    // updateProgress(angle);
  }
});

document.addEventListener("mouseup", () => {
  if (isDragging) {
    isDragging = false;
    ball.style.cursor = "grab";
  }
});

// function updateProgress(angle) {
//   const progress = (angle + Math.PI * 2) % (Math.PI * 2) / (Math.PI * 2);
//   // Use progress to update your circular progress accordingly
// }
