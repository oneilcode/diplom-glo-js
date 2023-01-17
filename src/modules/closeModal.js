const closeModal = () => {

   const modal = document.querySelector('.modal-callback');
   const overlay = document.querySelector('.modal-overlay');
   const closeBtn = document.querySelector('.modal-close');

   function closeModal() {
      modal.style.display = 'none';
      overlay.style.display = 'none';
   }

   overlay.addEventListener('click', closeModal);
   closeBtn.addEventListener('click', closeModal);
};

export default closeModal;