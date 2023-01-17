const closeModal = () => {

   const modal = document.querySelector('.modal-callback');
   const overlay = document.querySelector('.modal-overlay');
   const closeBtn = document.querySelector('.modal-close');

   closeBtn.addEventListener('click', (e) => {
      modal.style.display = 'none';
      overlay.style.display = 'none';
   });

   overlay.addEventListener('click', (e) => {
      modal.style.display = 'none';
      overlay.style.display = 'none';
   });
};

export default closeModal;