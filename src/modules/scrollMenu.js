const scrollMenu = () => {
   const topMenu = document.querySelector('.top-menu');
   const menuItems = topMenu.querySelectorAll('ul > li > a');

   menuItems.forEach(item => {
      item.addEventListener('click', (event) => {
         event.preventDefault();

         const ID = event.target.getAttribute('href').substr(1);

         document.getElementById(ID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
         });
      });
   });
};

export default scrollMenu;