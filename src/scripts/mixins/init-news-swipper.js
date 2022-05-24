

const swiperNews = document.querySelector('.news-collection.swiper');
const newsBtnPrev = document.querySelector(
	'.news-btn.swiper-button-prev',
);
const newsBtnNext = document.querySelector(
	'.news-btn.swiper-button-next',
);

swiperNews.append(newsBtnPrev);
swiperNews.append(newsBtnNext);

// eslint-disable-next-line no-undef
const swiper = new Swiper('.swiper.news-collection', {
	speed: 700,
	autoHeight: true,
	// touchMoveStopPropagation: false,
	// How many slides
	slidesPerView: 'auto',
	spaceBetween: 30,
	centeredSlides: true,
	/* autoplay:{
          delay:5000,
          disableOnInteraction: false,
      }, */
	// infinite
	loop: true,
	loopedSlides: 10,
	// Navigation arrows
	navigation: {
		prevEl: '.news-btn.swiper-button-prev',
		nextEl: '.news-btn.swiper-button-next',
	},
});
swiper.updateAutoHeight(700);

