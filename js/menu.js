const header = document.querySelector('header');

window.addEventListener('scroll', function(){

    header.classList.toggle('active', this.window.scrollY > 0)

})

/** */

var iMenu = document.getElementById("i_menu");
var nav = document.getElementById("nav");

iMenu.addEventListener("click", function() 
{
    if (nav.style.display === "block") 
    {
        nav.style.display = "none"; // Si el elemento de navegación está visible, lo oculta
    } 
    else 
    {
        nav.style.display = "block"; // Si el elemento de navegación está oculto, lo muestra
    }
});
