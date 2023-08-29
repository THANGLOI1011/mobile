const Btnmenu = document.querySelector('.header-icon');
const Btnclose = document.querySelector('.header-list-icon');
const Showoverlay = document.querySelector('.header-overlay');
const Headerlist = document.querySelector('.header-list');

Btnmenu.addEventListener("click", () => Headerlist.classList.add("open"));
Btnmenu.addEventListener("click", () => Showoverlay.classList.add("open"));
Btnclose.addEventListener("click" , () => Headerlist.classList.remove("open"));
Btnclose.addEventListener("click" , () => Showoverlay.classList.remove("open"));