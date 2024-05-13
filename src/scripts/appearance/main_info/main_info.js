function main_info(){
    const revealButtonMain = document.querySelector('.main__info__reveal-part-button');
    const revealTextMain = document.querySelector('.main__info__reveal-part-text');
    const mainInfoDescription = document.querySelector('.main__info__description-text');
    const revealImageMain = document.querySelector('.main__info__reveal-part-img');
    revealButtonMain.addEventListener('click', function () {
      if (revealTextMain.textContent === 'Читать далее') {
          revealTextMain.textContent = 'Скрыть';
          revealImageMain.src = './assets/img/didi.svg';
          mainInfoDescription.style.height = mainInfoDescription.scrollHeight + 'px';
    
      } else {
          revealTextMain.textContent = 'Читать далее';
          revealImageMain.src = './assets/img/expand.svg';
    
          // Установка высоты в зависимости от ширины экрана
          if (window.innerWidth < 768) {
              mainInfoDescription.style.height = '90px';
          } else {
              mainInfoDescription.style.height = '159px';
          }
      }
    });
}
export{main_info};

