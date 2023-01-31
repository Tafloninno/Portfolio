const humburger = document.querySelector('.humburger_menu');
const navMenu = document.querySelector('.mobile_menu');

humburger.addEventListener('click', () => {
  humburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});
document.querySelectorAll('.nav_link').forEach((n) => n.addEventListener('click', () => {
  humburger.classList.remove('active');
  navMenu.classList.remove('active');
}));