import Swiper from 'swiper';
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function swiper(){
    return new Swiper('.swiper', {
        
        direction: 'horizontal',
        modules: [Pagination],
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        slidesPerView:1.1,
        dynamicBullets: true,
        dynamicMainBullets: 7,
        spaceBetween:30,
        breakpoints: {
            320: {
              enabled: true,
              spaceBetween: 16,
              slidesPerView: 1.2,
            },
      
            400: {
                enabled: true,
                spaceBetween: 16,
                slidesPerView: 1.3,
              },
            450: {
                enabled: true,
                spaceBetween: 16,
                slidesPerView: 1.4,
              },
            500: {
                enabled: true,
                spaceBetween: 16,
                slidesPerView: 1.8,
              },  
              576: {
                enabled: true,
                spaceBetween: 16,
                slidesPerView: 2,
              },
            768: {
              enabled: false,
              loop: false,
              spaceBetween: 0,
              slidesPerView: "auto",
            },
          },
        });
}
export{ swiper };