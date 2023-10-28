let menu = document.querySelector('.hamburger');

function toggleMenu (event) {
  this.classList.toggle('is-active');
  document.querySelector( ".menuppal" ).classList.toggle("is_active");
  event.preventDefault();
}

menu.addEventListener('click', toggleMenu, false);


let section=document.querySelectorAll('section')
let navLink=document.querySelectorAll('header nav a')

window.onscroll=()=>{
    section.forEach(sec=>{
    let top=window.scrollY;
    let offset=sec.oofsetTop-150;
    let heigth=sec.offsetHeigth;
    let id=sec.getAttribute('id')
    if(top>offset && top<offset + heigth){
        navLink.forEach(links=>{
            links.classList.remove('active')
            document.querySelector('header nav a[href='+id+']').classList.add('active')
        })
    }
})
}

