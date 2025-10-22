let lastScroll = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;

  if (currentScroll > lastScroll && currentScroll > 100) {
    navbar.style.transform = "translateY(-100%)";
    navbar.style.transition = "0.5s";
    navbar.style.backdropFilter = 'blur(25px)'
  } else if (currentScroll < lastScroll) {
    navbar.style.transform = "translateY(0)";
    navbar.style.transition = "0.5s";
    navbar.style.backdropFilter = 'blur(25px)'
  }

  lastScroll = currentScroll;
})

document.getElementById('menu-bar').addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('links').style.right = "0";
  document.getElementById('links').style.transition = "0.5s";
  document.getElementById('close-menu').classList.remove('hidden');
  document.getElementById('menu-bar').classList.add('hidden');
});

document.getElementById('close-menu').addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('links').style.right = "-100%";
  document.getElementById('links').style.transition = "0.5s";
  document.getElementById('close-menu').classList.add('hidden');
  document.getElementById('menu-bar').classList.remove('hidden');
});

document.addEventListener('click', (event) => {
  const navbar = document.getElementById('links');
  const menuBar = document.getElementById('menu-bar');
  const closeMenu = document.getElementById('close-menu');

  const isClickInsideNavbar = navbar.contains(event.target);
  const isClickOnMenuButton = menuBar.contains(event.target);
  const isClickOnCloseButton = closeMenu.contains(event.target);

  if (!isClickInsideNavbar && !isClickOnMenuButton && !isClickOnCloseButton) {
    document.getElementById('links').style.right = "-100%";
    document.getElementById('links').style.transition = "0.5s";
    document.getElementById('close-menu').classList.add('hidden');
    document.getElementById('menu-bar').classList.remove('hidden');
  }
});
