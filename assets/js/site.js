// Narlikar Lab site: dropdown menu and research-page accordion.

(function () {
  var dropdown = document.getElementById('main-dropdown');
  var btn = document.getElementById('dropdown-toggle');
  var menu = document.getElementById('dropdown-menu');

  function closeDropdown() {
    btn.classList.remove('open');
    menu.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
  }

  if (dropdown && btn && menu) {
    btn.addEventListener('click', function () {
      var open = !menu.classList.contains('open');
      btn.classList.toggle('open', open);
      menu.classList.toggle('open', open);
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    // Close the menu when clicking anywhere outside it, or on Escape.
    document.addEventListener('click', function (e) {
      if (!dropdown.contains(e.target)) closeDropdown();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeDropdown();
    });
  }

  // Research page: clicking a topic opens it and closes the others.
  var items = document.querySelectorAll('.accordion-item');
  Array.prototype.forEach.call(items, function (item) {
    item.addEventListener('click', function () {
      var isOpen = item.classList.contains('open');
      Array.prototype.forEach.call(items, function (i) { i.classList.remove('open'); });
      if (!isOpen) item.classList.add('open');
    });
  });
})();
