export const Settings = {
   dots: false,
   infinite: true,
   speed: 500,
   slidesToShow: 6,
   slidesToScroll: 3,
   responsive: [
      {
         breakpoint: 1500,
         settings: {
            slidesToShow: 5,
            slidesToScroll: 4,
            infinite: true,
            dots: false
         }
      },
      {
         breakpoint: 1300,
         settings: {
            slidesToShow: 4,
            slidesToScroll: 2,
            initialSlide: 5
         }
      },
      {
         breakpoint: 1050,
         settings: {
            slidesToShow: 3,
            slidesToScroll: 1
         }
      },
      {
         breakpoint: 800,
         settings: {
            slidesToShow: 2,
            slidesToScroll: 1
         }
      }
      ,
      {
         breakpoint: 450,
         settings: {
            slidesToShow: 1,
            slidesToScroll: 1
         }
      }
   ]
};