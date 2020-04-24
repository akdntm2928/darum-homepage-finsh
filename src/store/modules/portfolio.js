// initial state
//각각의 포트폴리오 값들을 이곳에 넣는다.
//DB를 쓰듯이 state를 이용하고
//화면으로 뿌리는 것은 getter에서 연산을 통하도록 한다.
const state = {
  list: [
    {
      renewalNumber: "renewal13",
      target: "renewal13",
      ment1: "ICT 통합보안 선두기업",
      ment2: "라온시큐어 리뉴얼",
      ment3: "UI / UX DESIGN, DEVELOP"
    },
    {
      renewalNumber: "renewal12",
      target: "renewal12",
      ment1: `기업의 사회적 책임을 <br/> 실천하고 세상의 지속 가능한 <br/> 발전을 지향합니다.`,
      ment2: "성주재단 리뉴얼",
      ment3: "UI / UX DESIGN, DEVELOP"
    },
    {
      renewalNumber: "renewal11",
      target: "renewal11",
      ment1: `세상을 바꾸는 금융, <br/>KB금융지주 경영연구소`,
      ment2: "KB금융 경영연구소",
      ment3: "UI / UX DESIGN, DEVELOP"
    },
    {
      renewalNumber: "renewal10",
      target: "renewal10",
      ment1: `각 지역의 특보 및 예보 <br/>발생 시 PUSH 알림으로 <br/>대비할 수 있습니다.`,
      ment2: "서울고속도로 재난 정보 시스템",
      ment3: "UI / UX DESIGN, DEVELOP"
    },
    {
      renewalNumber: "renewal09",
      target: "renewal09",
      ment1: `선불요금제 가입회원대상 <br />간편한 충전 수단을
      <br />제공합니다.`,
      ment2: "LG U+ 알뜰모바일 선불충전 APP",
      ment3: "UI / UX DESIGN"
    },
    {
      renewalNumber: "renewal08",
      target: "renewal08",
      ment1: `슈프리마의 브랜드 가치를 <br />세계로 전할 수 있는 <br />글로벌
      파트너 사이트입니다.`,
      ment2: "슈프리마 Microwebsite SGPP 2019",
      ment3: "UI / UX DESIGN, DEVELOP"
    },
    {
      renewalNumber: "renewal07",
      target: "renewal07",
      ment1: `수준별 맞춤 학습으로 <br />우리 아이 성적을 <br />관리하세요.`,
      ment2: "금성출판사 초등∙중등 학습사이트 리뉴얼",
      ment3: "UI / UX DESIGN"
    },
    {
      renewalNumber: "renewal06",
      target: "renewal06",
      ment1: `원하는 사양에 맞는 <br />제품을 검색하고 <br />비교합니다.`,
      ment2: "앤비젼 국문/영문 홈페이지 리뉴얼",
      ment3: "UI / UX DESIGN, DEVELOP"
    },
    {
      renewalNumber: "renewal05",
      target: "renewal05",
      ment1: `SKT T World <br />모바일 앱 서비스`,
      ment2: "SKT T World Mobile APP 개편",
      ment3: "PUBLISHING"
    },
    {
      renewalNumber: "renewal04",
      target: "renewal04",
      ment1: `글로벌 로밍 서비스를 <br />모바일에서`,
      ment2: "LGU+ 글로벌 로밍 인∙아웃 바운드 모바일 구축",
      ment3: "UI / UX DESIGN, DEVELOP"
    },
    {
      renewalNumber: "renewal03",
      target: "renewal03",
      ment1: `온라인으로 <br />간편하게 주문`,
      ment2: "피자알볼로 웹사이트 리뉴얼",
      ment3: "UI / UX DESIGN, DEVELOP"
    },
    {
      renewalNumber: "renewal02",
      target: "renewal02",
      ment1: `택배 서비스 부문 <br />
      2년 연속 1위`,
      ment2: "로젠택배 대표 홈페이지 개편",
      ment3: "UI / UX DESIGN"
    },
    {
      renewalNumber: "renewal01",
      target: "renewal01",
      ment1: `뛰어난 품질에 기반한 <br />
      프리미엄 브랜드`,
      ment2: "슈프리마 웹사이트 리뉴얼",
      ment3: "UI / UX DESIGN, DEVELOP"
    },
    {
      renewalNumber: "port-keit",
      target: "keit",
      ment1: `대한민국 기술의 <br />
      프리미엄 시대 - <br />
      KEIT가 열어갑니다.`,
      ment2: "한국기술평가관리원 리뉴얼",
      ment3: "UI / UX DESIGN, DEVELOP"
    },
    {
      renewalNumber: "port-teachinghub",
      target: "teachinghub",
      ment1: `티칭허브가 <br />
      미래교실을 빛냅니다.`,
      ment2: "금성출판사 티칭허브 리뉴얼",
      ment3: "UI / UX DESIGN"
    },
    {
      renewalNumber: "port-koreacorp",
      target: "koreacorp",
      ment1: `차세대 <br />
      어드민 시스템 구축`,
      ment2: "한국코퍼레이션",
      ment3: "UI / UX DESIGN"
    },
    {
      renewalNumber: "port-mykids",
      target: "mykids",
      ment1: `삼성화재 마이키즈로 <br />
      우리아이의 <br />
      미래를 설계하세요.`,
      ment2: "삼성화재 마이키즈 컨설팅 앱",
      ment3: "UI / UX DESIGN"
    },
    {
      renewalNumber: "port-nugu",
      target: "nugu",
      ment1: `국내최초 지능형 <br />
      음성인식 디바이스`,
      ment2: "SKT NUGU 프로모션 사이트 구축",
      ment3: "UI / UX DESIGN"
    },
    {
      renewalNumber: "port-purunet",
      target: "purunet",
      ment1: `언제, 어디에서나 <br />
      온라인 교과 공부는 <br />
      푸르넷`,
      ment2: "금성출판사 푸르넷 리뉴얼",
      ment3: "UI / UX DESIGN"
    },
    {
      renewalNumber: "port-posco",
      target: "posco",
      ment1: `포스코그룹<br />통합 소통채널`,
      ment2: "포스코 투데이 개편",
      ment3: "UI / UX DESIGN, DEVELOP"
    },
    {
      renewalNumber: "port-esellers",
      target: "esellers",
      ment1: `오픈마켓, 종합몰, 소셜커머스<br />쇼핑몰 관리를 한번에!`,
      ment2: "이셀러스 사이트 전면 재구축",
      ment3: "UI / UX DESIGN"
    },
    {
      renewalNumber: "port-middleeast",
      target: "middleeast",
      ment1: `의료산업의<br />글로벌 리더`,
      ment2: "한국보건산업진흥원 중동환자 관리 DB 구축/시스템 운영",
      ment3: "UI / UX DESIGN"
    },
    {
      renewalNumber: "port-hyosung",
      target: "hyosung",
      ment1: `대한민국 펌프 No.1 회사`,
      ment2: "효성굿스프링스 Spec.DB 시스템 운영",
      ment3: "UI / UX DESIGN"
    },
    {
      renewalNumber: "port-samsungpop",
      target: "samsungpop",
      ment1: `신뢰에 가치로 답하다<br />자산관리의 새로운 전략`,
      ment2: "삼성증권 POP 사이트 개편",
      ment3: "UI / UX DESIGN"
    },
    {
      renewalNumber: "port-tworld",
      target: "tworld",
      ment1: `SK텔레콤<br />공식 고객맞춤 온라인샵`,
      ment2: "SKT T월드 다이렉트샵 웹/모바일 운영",
      ment3: "UI / UX DESIGN"
    },
    {
      renewalNumber: "renewal00",
      innerValue: "다름과 함께 다르게 커뮤니케이션"
    }
  ],
  smallList: [
    {
      className: "port-diad",
      target: "diad",
      ment1: `이셀러스 DiAD 구축`,
      ment2: "PUBLISHING"
    },
    {
      className: "port-khidi",
      target: "khidi",
      ment1: `한국보건산업진흥원
      <br />중동환자 관리 시스템 운영`,
      ment2: "MAINTENANCE"
    },
    {
      className: "port-hanhwa",
      target: "hanhwa",
      ment1: `한화 온슈어 개편`,
      ment2: "UI / UX DESIGN"
    },
    {
      className: "port-medialog",
      target: "medialog",
      ment1: `미디어로그 디자인 개편`,
      ment2: "UI / UX DESIGN"
    },
    {
      className: "port-lguplus",
      target: "lguplus",
      ment1: `LG유플러스 글로벌로밍 개편`,
      ment2: "UI / UX DESIGN"
    },
    {
      className: "port-lgumobi",
      target: "lgumobi",
      ment1: `LG유플러스 유모비 운영`,
      ment2: "MAINTENANCE"
    },
    {
      className: "port-ssg",
      target: "ssg",
      ment1: `SSG닷컴 글로벌 사이트 구축`,
      ment2: "UI / UX DESIGN"
    },
    {
      className: "port-sinhyup",
      target: "port-sinhyup",
      ment1: `신협중앙회 모바일뱅킹
      <br />APP 재구축`,
      ment2: "UI / UX DESIGN"
    },
    {
      className: "port-nongshim",
      target: "nongshim",
      ment1: `농심그룹 나들가게 포스몰 구축`,
      ment2: "UI / UX DESIGN"
    },
    {
      className: "port-11st",
      target: "11st",
      ment1: `11번가 브랜드
      <br />PC웹 MOBILE웹 신규 구축`,
      ment2: "UI / UX DESIGN"
    },
    {
      className: "port-highway",
      target: "highway",
      ment1: `서울고속도로(하이패스)
      <br />실시간 과금시스템 구축`,
      ment2: "UI / UX DESIGN"
    },
    {
      className: "port-500v",
      target: "500v",
      ment1: `EPP 500V 사이트 구축`,
      ment2: "UI / UX DESIGN"
    }
  ],
  portsPopupList: [
    {
      id: "renewal13",
      title: `Raonsecure
      <br />wesite renewal`,
      viewSub: "라온시큐어 리뉴얼",
      firstImg: `../assets/images/pc/btn/btn-arrow-down.svg`,
      infoboxText: `메인에 페럴랙스 스크롤을 사용하여 내용을 직관적이고 효과적으로
      전달할 수있도록 구성하였습니다.
      <br />
      <br />또한 브랜드 아이덴티티를 강화한 디자인 개선과
      보안솔루션에 특화된 제품 및 사양을 <br />파악하기 편리하도록
      사이트를 구현하였습니다.`,
      tbodyClient: "Raonsecure",
      tbodyDate: "2019.11",
      tbodyService: "Web / Mobile",
      tbodyLaunch: "www.raoncorp.com",
      responsiveWebImg: `../assets/images/pc/renewal13-01.jpg`,
      pcDesignImg: `../assets/images/pc/renewal13-02.jpg`,
      colorSystemImg1: `../assets/images/pc/renewal13-03.png`,
      colorSystemImg2: `../assets/images/pc/renewal13-04.jpg`,
      iconStyleImg: `../assets/images/pc/renewal13-05.jpg`,
      prevId: "renewal12"
    },
    {
      id: "renewal12",
      title: `Sungjoofoundation
      <br />wesite renewal`,
      viewSub: "성주재단 리뉴얼",
      infoboxText: `기업의 다양한 컨텐츠를 직관적으로 나타낼 수 있는 UI구성과
      깔끔한 디자인으로 쉽게 컨텐츠를
      <br />파악할 수 있도록 구현하였습니다. 또한 디바이스에
      구애받지 않는 반응형 사이트로 어느 기기에서나 <br />쉽게
      진입할 수 있도록 접근성을 높였습니다.`,
      tbodyClient: "성주재단",
      tbodyDate: "2019.10 ~ 2019.12",
      tbodyService: "Web / Mobile",
      tbodyLaunch: "www.sungjoofoundation.com",
      responsiveWebImg: `../../assets/images/pc/renewal12-01.jpg`,
      pcDesignImg: `../../assets/images/pc/renewal12-02.jpg`,
      colorSystemImg1: `../../assets/images/pc/renewal12-03.jpg`,
      colorSystemImg2: ``,
      iconStyleImg: ``,
      prevId: "renewal12"
    },
    {
      id: "renewal11",
      title: "test11"
    }
  ],
  initPorts: 6, //한 phase에 노출할 데이터 수(초기 세팅 6)
  addPorts: null,
  toggleSmallList: false,
  confirmLastLarge: false,
  renewalNumber: "",
  originNumber: "",
  toName: ""
};

// getters
const getters = {
  totalPorts: state => {
    return state.list.length;
  },
  initData: state => {
    //console.log("mapGetters initData activated")
    let goData = [];
    for (let i = 0; i < state.initPorts; i++) {
      goData.push(state.list[i]);
    }
    return goData;
  },
  moreData: state => {
    let goData = [];
    let calcValue = state.list.length - state.addPorts;
    //console.log("vuex moreData's calcValue = ", calcValue);
    if (calcValue > 6) {
      for (let i = state.addPorts; i < state.addPorts + 6; i++) {
        goData.push(state.list[i]);
      }
    } else {
      for (let i = state.addPorts; i < state.addPorts + calcValue; i++) {
        goData.push(state.list[i]);
        state.confirmLastLarge = true;
      }
    }
    return goData;
  },
  detailPorts: state => {
    let findingId = state.renewalNumber;
    //console.log("findingId : ", findingId);
  },
  togglePrev: state => {
    let originId = state.originNumber;
    console.log("vuex originId : ", originId);
  }
};

// actions
const actions = {};

// mutations
const mutations = {
  setMoreData(state, data) {
    state.addPorts = data;
  },
  setRenewalNumber(state, data) {
    state.renewalNumber = data;
    //console.log("state.renewalNumber : ", state.renewalNumber);
  },
  setOriginNumber(state, data) {
    state.originNumber = data;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
