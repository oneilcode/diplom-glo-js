const accordeon = () => {
   let els = document.querySelectorAll('.element');
   let elementContent = document.querySelectorAll('.element-content');

   console.log('dfdkfj');

   // els.forEach(e => e.classList.remove('active'));
   // elementContent.forEach(e => e.style.display = 'none');

   els.forEach(item => {
      item.addEventListener('click', e => {
         if (e.target.classList.contains('active')) {
            e.target.classList.remove('active');
            return;
         }
         els.forEach(e => e.classList.remove('active'));
         e.target.classList.add('active');


      });
   });

};

export default accordeon;