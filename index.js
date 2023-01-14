const navMenu = document.getElementById('nav-menu');
const navMenuToggle = document.getElementById('nav-toggle');
const scrollTopButton = document.getElementById('scroll-top');
const navLinks = document.querySelectorAll('.nav__link');

function showScrollTopButton(scrollTopButton) {
  window.addEventListener('scroll', () => {
    if (window.scrollY >= 200) {
      scrollTopButton.classList.add('show-scroll');
    } else {
      scrollTopButton.classList.remove('show-scroll');
    }
  });
}

function showMenu(toggle, menu) {
  toggle.addEventListener('click', () => {
    menu.classList.toggle('show-menu');
  });
}

function hideMenu(menu) {
  menu.classList.remove('show-menu');
}

function hideMenuOnLinkClick(links) {
  links.forEach((link) =>
    link.addEventListener('click', () => {
      hideMenu(navMenu);
    }),
  );
}

function hideMenuOnOutsideClick(menu, toggle) {
  window.addEventListener('click', (event) => {
    if (!menu.contains(event.target) && !toggle.contains(event.target)) {
      hideMenu(menu);
    }
  });
}

showScrollTopButton(scrollTopButton);
showMenu(navMenuToggle, navMenu);
hideMenuOnLinkClick(navLinks);
hideMenuOnOutsideClick(navMenu, navMenuToggle);
