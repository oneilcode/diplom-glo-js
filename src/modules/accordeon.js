const accordeon = () => {
   let titles = document.querySelectorAll('.title');
   let elements = document.querySelectorAll('.element');


   titles.forEach((elem) => {
      elem.addEventListener('click', function () {
         /*находим все активные элементы*/
         let contentActive = document.querySelectorAll('.element-content.active');
         let elementActive = document.querySelectorAll('.element.active');
         /*прогоняем через цикл и удаляем класс active*/
         contentActive.forEach((elem) => {
            elem.classList.remove('active');
         });

         elementActive.forEach((elem) => {
            elem.classList.remove('active');
         });


         let parentElem = this.parentNode;

         let contentBlock = parentElem.querySelector('.element-content');
         let elementBlock = parentElem.querySelector('.element');

         if (contentBlock.classList.contains("active")) {
            contentBlock.classList.remove('active');
         } else {
            contentBlock.classList.add('active');

         }


      });
   });

};

export default accordeon;