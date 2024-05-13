function brand_list(){
    const revealButton = document.querySelector('.brand__list__reveal-part__button');
    const revealText = document.querySelector('.brand__list__reveal-part__text');
    const revealImage = document.querySelector('.brand__list__reveal-part__img');
    const swiperWrapper = document.querySelector('.brand__list__items-packing.swiper-wrapper');
    
    revealButton.addEventListener('click', function () {
        if (revealText.textContent === 'Читать далее') {
            revealText.textContent = 'Скрыть';
            revealImage.src = './assets/img/didi.svg';
              swiperWrapper.style.height = swiperWrapper.scrollHeight + 'px';
            
        } else {
            revealText.textContent = 'Читать далее';
            revealImage.src = './assets/img/expand.svg';
            swiperWrapper.style.height = '170px';
        }
    });

    const revealButtonFix = document.querySelector('.brand__list__reveal-part__button.swiper-fixing');
    const revealTextFix = document.querySelector('.brand__list__reveal-part__text.swiper-fixing');
    const revealImageFix = document.querySelector('.brand__list__reveal-part__img.swiper-fixing');
    const swiperWrapperFix = document.querySelector('.brand__list__items-packing.swiper-wrapper.swiper-fixing');
    
    revealButtonFix.addEventListener('click', function () {
        if (revealTextFix.textContent === 'Читать далее') {
            revealTextFix.textContent = 'Скрыть';
            revealImageFix.src = './assets/img/didi.svg';
            swiperWrapperFix.style.height = swiperWrapperFix.scrollHeight + 'px';
            
        } else {
            revealTextFix.textContent = 'Читать далее';
            revealImageFix.src = './assets/img/expand.svg';
            swiperWrapperFix.style.height = '170px';
        }
    });

    const imgButtons = document.querySelectorAll('.brand__list__items-switching');

    document.addEventListener('click', function () {
      imgButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.classList.add('clicked');
            setTimeout(() => {
                button.classList.remove('clicked');
            }, 500);
        });
    });
    }); 
}
export{brand_list};

