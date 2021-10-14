let options = {
    loop: true,
    slidesPerView:2,  //スライドを2つ（分）表示
    centeredSlides : true,  //アクティブなスライドを中央に表示
    effect: 'coverflow',  //スライドのエフェクトを coverflow に
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      hideOnClick: true,
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  };
   
  //上記オプションを使って初期化
  let mySwiper = new Swiper ('.swiper', options);