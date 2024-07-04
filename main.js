function displayTimeAndDay() {
    const now = new Date();

  
    const hours = String(now.getUTCHours()).padStart(2, '0');
    const minutes = String(now.getUTCMinutes()).padStart(2, '0');
    const seconds = String(now.getUTCSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayString = daysOfWeek[now.getUTCDay()];

    document.getElementById('time').innerText = timeString;
    document.getElementById('day').innerText = dayString;
    }

displayTimeAndDay();


setInterval(displayTimeAndDay
, 1000);

function toggleMenu() {
    
    var burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    const navbar= document.querySelector('.navbar');
    burger.classList.toggle('active')
    if (burger.classList.contains('active')) {
        navLinks.style.backgroundColor = 'white';
        navLinks.style.position = 'absolute';
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.zIndex= '10';
        navLinks.style.top = '2px';
        navLinks.style.right = '64px';
    
    } else {
        navLinks.style.display = 'none';
    }
}