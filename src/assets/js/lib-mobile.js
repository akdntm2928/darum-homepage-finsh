;(function(global, doc, $) {

  $(global).ready(function(){
    
    // 팝업열기
    $(".btn-open-popup").click(function(){
      $(".pop-container").fadeIn("fast");
      $("html, body").animate({scrollTop : 0} , 150);
    });

    // 팝업닫기
    $(".btn-close-pop").click(function(){
      $(".pop-container").fadeOut("fast");
      $(".btn-more-info").show();
      $(".pop-container .info-box").hide();
      $("html, body").animate({scrollTop : 0} , 150);
    });

    // 더보기 버튼
    $(".btn-more-info").click(function(){

      $(".pop-container .info-box").fadeIn("fast");
      $(this).fadeOut("fast");

      var btn_height = $(".pop-container > a").outerHeight();
      var resetScroll = $(".pop-container .info-box").offset().top;
      var moreBtnHeight = $(".btn-more-info").outerHeight(true);

      $("html, body").animate({ scrollTop : resetScroll - moreBtnHeight - (btn_height*3) } , 250 );

    });

   // 배경 모션 관련 스크립트
   // global.onload = function () {   // onload 기능만 주석처리
      var app = new PIXI.Application();
      document.body.appendChild(app.view);

      // create a texture from an image path
      var texture = PIXI.Texture.fromImage("../../assets/images/mobile/bg-main.jpg");
      //var texture = PIXI.Texture.fromImage("http://localhost:9090/assets/images/mobile/bg.png");

      /* create a tiling sprite ...
           * requires a texture, a width and a height
           * in WebGL the image size should preferably be a power of two
      */
      var tilingSprite = new PIXI.extras.TilingSprite(
        texture,
        app.screen.width,
        app.screen.height
      );
      app.stage.addChild(tilingSprite);

      var count = 0;

      app.ticker.add(function () {

        count += 0.005;

        //tilingSprite.tileScale.x = 1 + Math.sin(count);
        //tilingSprite.tileScale.y = 1 + Math.cos(count);

        tilingSprite.tileScale.x = 1.5 + Math.sin(count);
        tilingSprite.tileScale.y = 1.7 + Math.cos(count);

        //tilingSprite.tilePosition.x += 0;
        //tilingSprite.tilePosition.y += 0;

        tilingSprite.tilePosition.x = -100;
        tilingSprite.tilePosition.y = -100;
      });

    //}

  });

  $(global).scroll(function(){
    var scrolltop = $(global).scrollTop();
    //console.log(scrolltop);
    if(scrolltop > 10){
      $(".pop-container > a").addClass("scrol");
    }else{
      $(".pop-container > a").removeClass("scrol");
    }
  });

  // 텍스트 순차 모션 스크립트
  var tl = new TimelineMax();

  tl.to(".animation-row-1", 1, { y: '-=30', autoAlpha: 1 })
    .to(".animation-row-2", 1, { y: '-=30', autoAlpha: 1 })
    .to(".animation-row-3", 1, { y: '-=30', autoAlpha: 1 })
    .to(".animation-row-4", 1, { y: '-=30', autoAlpha: 1 });

})(window, document, window.jQuery);

(function(global, doc, $) {

    // 구글지도
    var myLatlng = new google.maps.LatLng(37.477133, 126.883643); // y, x좌표값
    var mapOptions = {
      zoom: 17,
      center: myLatlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    var map = new google.maps.Map(doc.getElementById('mapview'), mapOptions);
    var iconBase = '../../assets/images/mobile/'
    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      icon: iconBase + 'icon-map-pin.png'
    });

    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map, marker);
    });

})(window, document, window.jQuery);