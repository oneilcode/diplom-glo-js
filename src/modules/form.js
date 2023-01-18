const form = () => {
   const form = document.querySelector('form');

   const statusBlock = document.createElement('div');
   const loadText = 'Идет отправка...';
   const errorText = 'Ошибка...';
   const successText = 'Отправлено';

   const name = form.querySelector('input[name=fio]');
   const phone = form.querySelector('input[name=tel]');

   console.log('djfhdjfh');

   const sendData = (data) => {
      return fetch('https://jsonplaceholder.typicode.com/posts', {
         method: 'POST',
         body: JSON.stringify(data),
         headers: {
            "Content-Type": "application/json"
         }
      }).then(res => res.json());
   };

   const validate = (list) => {
      let success = true;


      if (name.value.length === 0) {
         success = false;
         // Имя должно содержать не менее 1 символа!
         statusBlock.textContent = errorText;
      }

      if (phone.value.match(/[^0-9\+]/g, '')) {
         success = false;
         // Номер телефона не должен содержать данные символы
         statusBlock.textContent = errorText;
      } else if (phone.value.length < 11) {
         success = false;
         // Номер телефона должен содержать не менее 11 цифр!;
         statusBlock.textContent = errorText;
      }

      return success;
   };

   const submitForm = () => {
      const formElements = form.querySelectorAll('input');
      const formData = new FormData(form);
      const formBody = {};

      statusBlock.textContent = loadText;
      form.append(statusBlock);

      formData.forEach((val, key) => {
         formBody[key] = val;
      });

      //проверка на заполненность полей в форме
      if (validate(formElements)) {
         sendData(formBody)
            .then(data => {
               statusBlock.textContent = successText;
               setTimeout(() => {
                  statusBlock.textContent = '';
               }, 3000);

               formElements.forEach(input => {
                  input.value = '';
               });
            })
            .catch(error => {
               statusBlock.textContent = errorText;
            });

      } else {
         alert('данные не валидны');
      }
   };

   try {
      if (!form) {
         throw new Error('Верните форму на место!');
      }

      form.addEventListener('submit', (e) => {
         e.preventDefault();

         submitForm();

      });
   } catch (error) {
      console.log(error.message);
   }

};

export default form;