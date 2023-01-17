const scrollBtn = () => {
   const btn = document.querySelector('.up');
   const header = document.querySelector('.top-slider');

   btn.style.oppacity = '0';
   btn.style.transition = 'all .3s ease-in-out';

   function magic() {
      if (window.pageYOffset > 700) {
         btn.style.opacity = '1';
      } else {
         btn.style.opacity = '0';
      }
   }

   window.onscroll = magic;

   btn.addEventListener('click', () => {
      header.scrollIntoView({
         block: 'start',
         behavior: 'smooth',
      });
   });
};

export default scrollBtn;