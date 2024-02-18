document.addEventListener('DOMContentLoaded', function() {
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');
  const mobileMenu = document.querySelector('.mobile-ul');

  menuIcon.addEventListener('click', function() {
    mobileMenu.classList.toggle('open');
    closeIcon.classList.toggle('open');
    
  });

  closeIcon.addEventListener('click', function() {
    mobileMenu.classList.remove('open');
    closeIcon.classList.remove('open');

  });
});

