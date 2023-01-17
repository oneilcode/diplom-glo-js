const scrollBtn = () => {

   const btn = document.querySelector('.up');
   const sectionServices = document.getElementById('services');

   btn.addEventListener('click', () => {
      sectionServices.scrollIntoView({
         block: 'nearest', // к ближайшей границе экрана
         behavior: 'smooth', // и плавно 
      });
   });
};

export default scrollBtn;