(function (global, doc, $) {
  $(function () {
    alert("activated");
  });
  // gnb 열기,닫기
/*   $(".btn-gnb").click(function () {
    $(this).toggleClass("active");
    $(".gnb-wrap").animate({ width: "toggle" });
  }); */

  // gnb 링크 클릭 시 gnb 닫기
  $(".gnb-wrap a").click(function () {
    $(".btn-gnb").toggleClass("active");
    $(".gnb-wrap").animate({ width: "toggle" });
  });

  // 의뢰하기 팝업 오픈
  $(".request-open, .port-request-open").click(function () {
    $(".pop-request").fadeIn();
    $("body").addClass("of-hidden");
  });

  // 인사이브 뷰, 포트폴리오 뷰, 지도 팝업 닫기
  $(".close-pop-inside, .close-pop-map, .port-pop-close").click(function () {
    $(".pop-inside, .pop-map, .pop-portfolio").fadeOut();
    $("body").removeClass("of-hidden");
  });

  // 의뢰하기 팝업 닫기
  $(".request-pop-close").click(function () {
    $(".pop-request").fadeOut();
    $("body").removeClass("of-hidden");
  });

  // 포트폴리오 디번째 리스트 더보기
  $(".fifth-list-more").click(function () {
    $(".fifth-list, .fourth-list-more").fadeIn();
    // $(this).fadeOut('fast');
    $(this).css("display", "none");
  });

  // 포트폴리오 네번째 리스트 더보기
  $(".fourth-list-more").click(function () {
    $(".fourth-list, .third-list-more").fadeIn();
    // $(this).fadeOut('fast');
    $(this).css("display", "none");
  });

  // 포트폴리오 세번째 리스트 더보기
  $(".third-list-more").click(function () {
    $(".third-list, .second-list-more").fadeIn();
    // $(this).fadeOut('fast');
    $(this).css("display", "none");
  });

  // 포트폴리오 두번째 리스트 더보기
  $(".second-list-more").click(function () {
    $(".second-list, .port-more").fadeIn();
    // $(this).fadeOut('fast');
    $(this).css("display", "none");
  });

  // 포트폴리오 리스트 더보기
  $(".port-more").click(function () {
    $(".port-list-more").fadeIn();
    // $(this).fadeOut('fast');
    $(this).css("display", "none");
  });

  // 포트폴리오 뷰 팝업 열기
  $(".port-list li a").click(function () {
    var activeView = $(this).attr("data-target");
    $(".pop-portfolio").fadeIn().scrollTop(0, 0);
    $(".port-view-wrap").hide();
    $("#" + activeView).show();
    $("body").addClass("of-hidden");
  });

  // 포트폴리오 뷰 페이지 이동
/*   $(".prev, .next").click(function () {
    if ($(this).hasClass("last-page-btn")) {
      alert("마지막 페이지입니다.");
      return false;
    } else {
      var moveTo = $(this).attr("data-target");
      $(".pop-portfolio").scrollTop(0, 0);
      $(".port-view-wrap").hide();
      $("#" + moveTo).fadeIn("fast");
    }
  }); */

  // 인사이드 탭메뉴
  /*
  $('.inside-list:first').show();
  $('.inside-tab ul li').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    var activeTab = $(this).attr('rel');
    $('.inside-list').hide();
    $('#' + activeTab).show();
  });
	*/

  // 인사이드 뷰 팝업 오픈
  $(".inside-post a").click(function () {
    $(".pop-inside").fadeIn();
    $("body").addClass("of-hidden");
  });

  // 지도 팝업 오픈
  $(".btn-map").click(function () {
    $(".pop-map").fadeIn();
    $("body").addClass("of-hidden");
  });

  //지원하기 딤드처리
  if (!$("input[name='sup-field']").is(":checked")) {
    $(".info-input input[name='sup-info']").attr("disabled", "disabled");
    $(".info-input input[name='filename']").attr("disabled", "disabled");
  }
  $("input[name='sup-field']").change(function () {
    if (!$("input[name='sup-field']").is(":checked")) {
      $(".info-input input[name='sup-info']").attr("disabled", "disabled");
      $(".info-input input[name='filename']").attr("disabled", "disabled");
    } else {
      $(".info-input input[name='sup-info']").removeAttr(
        "disabled",
        "disabled"
      );
      $(".info-input input[name='filename']").removeAttr(
        "disabled",
        "disabled"
      );
    }
  });
})(window, document, window.jQuery);

(function (global, doc, $) {
  // about 페이지 풀페이지 플러그인
  /* $(".about").fullpage({
    scrollOverflow: true,
    fitToSection: true,
    navigation: false,
    navigationPosition: "right",
    anchors: ["darumIs", "darumService", "darumMembers"],
    navigationTooltips: ["다름은", "남다른 서비스", "다른 사람들"],
    //anchors: ['darumIs', 'darumService', 'darumMembers'],
    //navigationTooltips: ['다름은', '남다른 서비스', '다른 사람들'],
    showActiveTooltip: true,
    css3: false,
    afterLoad: function (anchorLink, index) {
      if (index == 2 || index == 3) {
        $(".btn-top").fadeIn(); // 2,3번째 인덱스의 경우 버튼이 나오도록 한다.
      } else {
        $(".btn-top").fadeOut(); // 첫번재 인덱스인 경우 버튼이 사라진다.
      }
    },
  }); */

  $(".about").closest("body").addClass("fp-nav-about");
})(window, document, window.jQuery);

(function (global, doc, $) {
  // 다른 사람들 마우스오버 액션
/*   $(".members-wrap li").hover(function () {
    $(this).find(".members-info").stop().slideToggle();
  }); */

  // arrow down 버튼 hover 액션
  $(".btn-arrow-down").hover(
    function () {
      TweenMax.to($(this), 0.5, { y: "10", repeat: -1, yoyo: true });
    },
    function () {
      TweenMax.to($(this), 0.5, { y: "0" });
    }
  );

  // 포트폴리오 리스트 마우스오버 액션
  /* $(".port-list li, .port-list-more li").hover(function () {

    $(this).find("a").stop().slideToggle("fast");
  }); */

  // 더보기 버튼 hover 액션
  $(".btn-more").hover(
    function () {
      TweenMax.to(".btn-more-bg", 0.5, { rotation: 180 });
    },
    function () {
      TweenMax.to(".btn-more-bg", 0.5, { rotation: 0 });
    }
  );

  // arrow down 버튼 hover 액션
  $(".request-open").hover(
    function () {
      TweenMax.to(".request-open span", 0.5, {
        x: "10",
        repeat: -1,
        yoyo: true,
      });
    },
    function () {
      TweenMax.to(".request-open span", 0.5, { x: "0" });
    }
  );

  // 포트폴리오 뷰 prev 버튼 hover 액션
  $(".prev").hover(
    function () {
      TweenMax.to(".prev span", 0.5, { x: "-10", repeat: -1, yoyo: true });
    },
    function () {
      TweenMax.to(".prev span", 0.5, { x: "0" });
    }
  );

  // 포트폴리오 뷰 next 버튼 hover 액션
  $(".next").hover(
    function () {
      TweenMax.to(".next span", 0.5, { x: "10", repeat: -1, yoyo: true });
    },
    function () {
      TweenMax.to(".next span", 0.5, { x: "0" });
    }
  );

  // 인사이드 포스트 마우스오버 액션
  $(".inside-post").hover(function () {
    $(this).find("a").stop().slideToggle("fast");
  });
})(window, document, window.jQuery);

(function (global, doc, $) {
  // 지원하기 첨부파일 선택 시 input text에 파일명 등록
  var uploadFile = $("#attach-file");
  uploadFile.on("change", function () {
    if (window.FileReader) {
      var filename = $(this)[0].files[0].name;
    } else {
      var filename = $(this).val().split("/").pop().split("\\").pop();
    }
    $(this).siblings("#filename").val(filename);
  });
})(window, document, window.jQuery);

(function (global, doc, $) {
  // 구글지도
  var myLatlng = new google.maps.LatLng(37.477133, 126.883643); // y, x좌표값
  var mapOptions = {
    zoom: 17,
    center: myLatlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  };

  var map = new google.maps.Map(doc.getElementById("mapview"), mapOptions);
  var iconBase = "../../assets/images/pc/icon/";
  var marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    icon: iconBase + "icon-map-pin.svg",
  });

  google.maps.event.addListener(marker, "click", function () {
    infowindow.open(map, marker);
  });
})(window, document, window.jQuery);

//의뢰하기
function submit() {
  $("body").append(
    '<div class="alert"><div class="alert_box"><p>저희 다름을 찾아주셔서 대단히 감사합니다.<br />확인후 빠른 시일내에 연락드리겠습니다.</p><a href="#none" class="pop_close" onclick="subPopClose()">확인</a></div></div>'
  );
}

function subPopClose() {
  $(".alert").remove();
}

/* $(function () {
  console.log(123);
}); */
