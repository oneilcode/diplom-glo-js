const scrollBtn = () => {
   const btn = document.querySelector('.up');
   const header = document.querySelector('.top-slider');

   btn.style.visibility = 'hidden';
   btn.style.transition = 'all .3s ease-in-out';

   function magic() {
      if (window.pageYOffset > 700) {
         btn.style.visibility = 'visible';
      } else {
         btn.style.visibility = 'hidden';
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