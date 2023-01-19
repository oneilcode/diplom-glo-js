const serviceModal = () => {
   const btnService = document.querySelector('.button-services');
   const modal = document.querySelector('.modal-callback');
   const overlay = document.querySelector('.modal-overlay');
   const closeBtn = document.querySelector('.modal-close');
   const slideBtn = document.querySelectorAll('.fancyboxModal');

   //модальное окно по кнопке Оформить заказ
   slideBtn.forEach((item) => {
      item.addEventListener('click', function () {
         modal.style.display = 'block';
         overlay.style.display = 'block';
      });
   });

   btnService.addEventListener('click', function () {
      modal.style.display = 'block';
      overlay.style.display = 'block';
   });

   function closeModal() {
      modal.style.display = 'none';
      overlay.style.display = 'none';
   }

   overlay.addEventListener('click', closeModal);
   closeBtn.addEventListener('click', closeModal);
};

export default serviceModal;