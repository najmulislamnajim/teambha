// Navabar Icon 
const sidenavIcon = document.getElementById('bar_icon');

sidenavIcon.addEventListener('click', (e) => {
    e.preventDefault();

    document.getElementById('Menu').style.opacity = "1";
    document.getElementById('Menu').style.visibility = "visible";
    document.getElementById('Menu').style.top = "77px";

    
})
