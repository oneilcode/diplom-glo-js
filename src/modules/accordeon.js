const accordeon = () => {
   const elements = document.querySelectorAll('.element');
   const contents = document.querySelectorAll('.element-content');
   const titles = document.querySelectorAll('.title');

   elements.forEach(el => {
      el.addEventListener('click', (e) => {

         const self = e.currentTarget;
         const content = self.querySelector('.element-content');

         self.classList.toggle('active');

         if (self.classList.contains('active')) {
            content.style.display = 'block';
         } else {
            content.style.display = 'none';
            el.classList.remove('active');
         }
         content.classList.add('active');
      });
   });
};

export default accordeon;