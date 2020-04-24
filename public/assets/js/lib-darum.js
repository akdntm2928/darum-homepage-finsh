// =================================================================
// ie버전 스타일 관리 설정 (http://tonks.tistory.com/107)
// =================================================================
(function(global, doc, $) {

  var ieClass = doc.body;

  function get_version_of_IE () {

     var word,
         agent = navigator.userAgent.toLowerCase(),
         reg   = new RegExp( word + "([0-9]{1,})(\\.{0,}[0-9]{0,1})" );

     // IE old version ( IE 10 or Lower )
     if ( navigator.appName == "Microsoft Internet Explorer" ) word = "msie ";
     // IE 11
     else if ( agent.search( "trident" ) > -1 ) word = "trident/.*rv:";
     // Microsoft Edge
     else if ( agent.search( "edge/" ) > -1 ) word = "edge/";
     // 그외, IE가 아니라면 ( If it's not IE or Edge )
     else return -1;
     if (  reg.exec( agent ) != null  ) return parseFloat( RegExp.$1 + RegExp.$2 );
     return -1;

  }

  function individual_case ( tag ) {


    var ieVersion = parseInt ( get_version_of_IE() ),

    name = ( "" + tag.className ).replace( /^\s*|\s*$/g , "" );

    if ( tag == null || ! "className" in tag ) return;
    if ( name.length > 0 ) name += " ";
    if ( ieVersion < 0 || ieVersion >= 10 ) name += "lt-ie-10";
    switch ( ieVersion ) {
      case 9:   // ieVersion = 9 이면
        name += "ie-9";
        break;
      case 8:   // ieVersion = 8 이면
        name += "ie-8";
        break;
      case 7:   // ieVersion = 7 이면
        name += "ie-7";
        break;
      case 6:   // ieVersion = 6 이면
        name += "ie-6";
        break;
    }
    tag.className = name;

  }

  individual_case( ieClass );

})(window, document, window.jQuery);

// =================================================================
// SVG 포맷 처리 실행 (https://github.com/iconic/SVGInjector)
// =================================================================
(function(global, doc, $) {

  if (global.location.protocol !== 'file:') {
    // SVGInjector : Style 설정
    var svgInjection = function() {
      // img.inject-me 요소 수집해서 mySVGsToInject 변수에 참조
      var mySVGsToInject = doc.querySelectorAll('img.inject-svg');
      // SVG 주입(Injector) 설정 옵션
      var injectorOptions = {
        evalScripts: 'once', // always, once, never
        pngFallback: 'images/ie-assets', // PNG 대체 폴더 설정
      };
      // SVGInjector 함수에 연결
      SVGInjector(
        // 수집된 img.inject-me 요소
        mySVGsToInject,
        // SVG 주입(Injector) 설정 옵션
        injectorOptions,
        // 콜백 함수
        function(totalSVGsInjected) {
          // totalSVGsInjected는 SVG 주입된 설정 개수를 출력
          // console.log(totalSVGsInjected);
        }
      );
    };

    // IMG => SVG로 변환, ie9 이하 버전 PNG로 대체
    svgInjection();
  }

})(window, document, window.jQuery);

// =================================================================
// 스크롤 관련 제어
// =================================================================
(function(global, $) {

  // 부드럽게 스크롤 이동 처리
  // 스크롤 움직임 처리 (https://github.com/cferdinandi/smooth-scroll)
  smoothScroll.init();

  // 스크롤 스타일 설정 (http://manos.malihu.gr/jquery-custom-content-scroller/)
  $(".thumbnail-gallery .mCustomScrollbar").mCustomScrollbar({
    // 스크롤 X축만 처리
    axis: "x",
    // 스크롤 좌우 버튼 생성, 탭 이동 처리
    scrollButtons: {
      enable: true,
      tabindex: 0
    },
    // 키보드 접근성 처리
    keyboard: {
      enable: true
    },
  });

})(window, window.jQuery);

// =================================================================
// 테이블 컨텐츠 모바일 list-type으로 설정 시 실행 (css content 설정)
// =================================================================
function assignTableHeading($table) {

  // 함수가 요구하는 인자의 유형 검증
  if (!$table.jquery) {
    throw new Error('jQuery 객체를 전달해야 합니다.');
  }

  var columnHead = $table.find('th[scope="col"]'),
    tbodyRow = $table.find('tbody tr');

  // table > th Column title 수집
  var tdArr = columnHead.map(function(index, el) {
    return el.innerHTML;
  });

  tbodyRow.each(function(index, el) {
    // table > td 수집
    var $tds = $(el).children('td');
    // 순환 > 데이터 배열화
    $tds.each(function(i) {
      var $td = $tds.eq(i);
      // 데이터 배열을 순환
      $td.attr('aria-label', tdArr[i]);
    });
  });
}

// table > th의 Column title 값을 td:before에 할당
(function(doc, global, $) {

  var dataTableCnt = 1;
  $('[class*="table-board-type"][class*="list-type"]').add('[class*="table-view-type"][class*="list-type"]').each(function() {
    var $this = $(this);
    if ($this.attr("id")) {
      assignTableHeading($('#' + $this.attr("id")));
    } else {
      assignTableHeading($this.attr("id", "data-table-" + dataTableCnt));
      dataTableCnt++;
    }
  });

})(document, window, window.jQuery);

// =================================================================
// 팝업 플러그인 실행
// =================================================================
(function(global, $) {

  // 팝업 플러그인 연결
  var $popups = $('.popup').a11y_popup();

  // 테스트 팝업
  $('.btn-popup-test').on('click', function(e) {
    e.preventDefault();
    // 팝업 찾아 열기 (id)
    $.popupId($popups, 'popup-test').open();
  });

})(window, window.jQuery);

// =================================================================
// SelectBox 플러그인 실행
// =================================================================
(function(global, $) {

  // SelectBox Option 선택 설정
  var selectbox = $("select");
  selectbox.change(function() {
    var select_name = $(this).children("option:selected").text();
    $(this).siblings("label").text(select_name);
  });

})(window, window.jQuery);
