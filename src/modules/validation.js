const validation = () => {
   const form = document.querySelector('form');
   const inputText = form.querySelector('input[name=fio]');
   const inputTel = form.querySelector('input[name=tel]');

   form.addEventListener('submit', (event) => {
      event.preventDefault();
   });

   inputText.addEventListener('input', () => {
      inputText.value = inputText.value.replace(/[^а-я\s]/gi, '');
   });

   inputTel.addEventListener('input', () => {
      inputTel.value = inputTel.value.replace(/[^0-9\+]/g, '');
   });

};
export default validation;