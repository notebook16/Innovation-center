// Get the navbar element
const navbar = document.getElementById('navbar');

// Add an event listener for the scroll event
window.onscroll = function() {
  // Check if the page is scrolled down more than 50px
  if (window.scrollY > 25) {
    // Add the 'scrolled' class to the navbar
    navbar.classList.add('scrolled');
  } else {
    // Remove the 'scrolled' class if the user scrolls back to the top
    navbar.classList.remove('scrolled');
  }
};







var nextBtni = document.querySelector('.nexti'),
    prevBtni = document.querySelector('.previ'),
    carouseli = document.querySelector('.carouseli'),
    listi = document.querySelector('.listi'), 
    itemi = document.querySelectorAll('.itemi'),
    runningTimei = document.querySelector('.carouseli .timeRunningi');

let timeRunningi = 3000;
let timeAutoNexti = 7000;

nextBtni.onclick = function(){
    showSlider('nexti');
};

prevBtni.onclick = function(){
    showSlider('previ');
};

let runTimeOut;

let runNextAutoi = setTimeout(() => {
    nextBtni.click();
}, timeAutoNexti);

function resetTimeAnimation() {
    runningTimei.style.animation = 'none';
    runningTimei.offsetHeight; /* trigger reflow */
    runningTimei.style.animation = 'runningTime 7s linear 1 forwards';
}

function showSlider(type) {
    let sliderItemsDom = carouseli.querySelectorAll('.listi .itemi'); // Fixed 'list' to 'carouseli'
    
    if(type === 'nexti'){
        listi.appendChild(sliderItemsDom[0]); // Changed 'list' to 'listi'
        carouseli.classList.add('nexti'); // Fixed 'classListi' to 'classList'
    } else {
        listi.prepend(sliderItemsDom[sliderItemsDom.length - 1]); // Changed 'list' to 'listi'
        carouseli.classList.add('previ'); // Fixed 'classListi' to 'classList'
    }

    clearTimeout(runTimeOut);

    runTimeOut = setTimeout(() => {
        carouseli.classList.remove('nexti');
        carouseli.classList.remove('previ');
    }, timeRunningi);

    clearTimeout(runNextAutoi);
    runNextAutoi = setTimeout(() => {
        nextBtni.click();
    }, timeAutoNexti);

    resetTimeAnimation(); // Reset the running time animation
}

// Start the initial animation 
resetTimeAnimation();






















function toggleSidebar() {
    const sidebar = document.getElementById('mobileNav');
    sidebar.classList.toggle('active');
}














































































































