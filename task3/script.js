const lights = document.querySelectorAll('.light');

const colors = ['green', 'yellow', 'red'];
let currentColorIndex = 0;

function switchLight() {
    
    lights.forEach(light => {
        light.style.background = 'black';
    });

    
    lights[currentColorIndex].style.background = colors[currentColorIndex];

  
    currentColorIndex++;

    if (currentColorIndex === colors.length) {
        currentColorIndex = 0;
    }
}


lights.forEach(light => {
    light.addEventListener('click', switchLight);
});