const divOne= document.querySelector(".imageOne");

const scrollEffect= () =>
{
   divOne.style.opacity= 1 - window.pageYOffset / 1800;
   divOne.style.backgroundSize= 160 - window.pageYOffset / 18 + "%";
}

window.addEventListener("scroll", scrollEffect);