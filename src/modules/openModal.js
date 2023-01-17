const openModal = () => {
   const openBtn = document.querySelector('.btn-open');
   const modal = document.querySelector('.modal-callback');
   const overlay = document.querySelector('.modal-overlay');

   openBtn.addEventListener('click', () => {
      modal.style.display = 'block';
      overlay.style.display = 'block';
   });
};

export default openModal;