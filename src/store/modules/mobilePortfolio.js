// initial state
//각각의 포트폴리오 값들을 이곳에 넣는다.
//DB를 쓰듯이 state를 이용하고
//화면으로 뿌리는 것은 getter에서 연산을 통하도록 한다.
const state = {
  imageList: [
    {
      imageSrc: "../../assets/images/mobile/m_renewal01.jpg",
      altData: "라온시큐어 웹사이트 리뉴얼",
    },
    {
      imageSrc: "../../assets/images/mobile/m_renewal02.jpg",
      altData: "성주재단 웹사이트 리뉴얼",
    },
    {
      imageSrc: "../../assets/images/mobile/m_renewal03.jpg",
      altData: "KB금융 경영연구소 웹사이트 리뉴얼",
    },
    {
      imageSrc: "../../assets/images/mobile/m_renewal04.jpg",
      altData: "서울고속도로 재난 정보 시스템 구축",
    },
    {
      imageSrc: "../../assets/images/mobile/m_renewal05.jpg",
      altData: "LG U+ 알뜰모바일 선불충전 app 구축",
    },
    {
      imageSrc: "../../assets/images/mobile/m_renewal06.jpg",
      altData: "슈프리마 Microwebsite SGPP 2019 구축",
    }
  ],
  list: [
    {
      text: "<span>금성출판사 초등&middot;중등 학습사이트 리뉴얼</span>UI/UX DESING I 2019.09"
    },
    {
      text: "<span>앤비전 국문/영문 홈페이지 리뉴얼</span>UI/UX DESING, publishing I 2019.05"
    },
    {
      text: "<span>SKT T World Mobile App 개편</span>publishing I 2019.04"
    },
    {
      text: "<span>피자알볼로 웹사이트 리뉴얼</span>/UX DESING, publishing I 2018.09"
    },
    {
      text: "<span>LG U+ 글로벌 로밍 인&middot;아웃 바운드 모바일 구축</span>UI/UX DESING, publishing I 2018.08"
    },
    {
      text: "<span>로젠택배 홈페이지 리뉴얼</span>UI/UX DESING I 2018.12"
    },
    {
      text: "<span>슈프리마 웹사이트 리뉴얼</span>UI/UX DESING, publishing I 2018.07"
    },
    {
      text: "<span>한국기술평가관리원 리뉴얼</span>UI/UX DESING, publishing I 2018.02"
    },
    {
      text: "<span>금성출판사 티칭허브 히뉴얼</span>UI/UX DESING, publishing I 2017.12"
    },
    {
      text: "<span>한국코퍼레이션 디자인</span>UI/UX DESING, publishing I 2017.11"
    },
    {
      text: "<span>이셀러스 DiAD 구축</span>UI/UX DESING, publishing I 2017.10 - 2017.11"
    },
    {
      text: "<span>포스코 투데이 개편</span>UI/UX DESING, publishing I 2017.06"
    },
    {
      text: "<span>효성굿스프링스 Spec.DB 시스템 운영</span>UI/UX DESING I 2017.06"
    },
    {
      text: "<span>삼성화재 마이키즈 컨설팅 앱</span>UI/UX DESING I 2017.03"
    },
    {
      text: "<span>SKT T월드 다이렉트샵 웹/모바일 운영</span>UI/UX DESING I 2017.02"
    },
    {
      text: "<span class='spc'>한국보건사업진흥원 중동환자 관리 시스템</span>MAINTENANCE I 2017.02 - 2017.11"
    },
    {
      text: "<span>한화 온슈어 개편 디자인</span>UI/UX DESING I 2017.08 - 2017.11"
    },
    {
      text: "<span>미디어로그 디자인 개편</span>UI/UX DESING I 2017.02 - 2017.06"
    },
    {
      text: "<span>LG U+ 글로벌로밍 개편</span>UI/UX DESING I 2017.02 - 2017.04"
    },
    {
      text: "<span>SKT NUGU 프로모션 사이트 구축</span>UI/UX DESING I 2016.10"
    },
    {
      text: "<span>삼성증권 POP 사이트 개편</span>UI/UX DESING I 2016.10"
    },
    {
      text: "<span>SSG닷컴 글로벌 사이트 구축</span>UI/UX DESING I 2015.10 - 2016.05"
    },
    {
      text: "<span>신협중앙회 모바일뱅킹 APP 재구축</span>UI/UX DESING, DEVELOP I 2015.08 - 2016.02"
    },
    {
      text: "<span>농심그룹 나들가게 포스몰 구축</span>UI/UX DESING, DEVELOP I 2015.05 - 2015.12"
    },
    {
      text: "<span>11번가 브랜드11 PC/MOBILE 웹 구축</span>UI/UX DESING I 2015.05 - 2015.10"
    },
    {
      text: "<span>서울고속도로 실시간 과금시스템 구축</span>UI/UX DESING, DEVELOP I 2014.12 - 2015.02"
    },
    {
      text: "<span>EPP 500V 사이트 구축</span>UI/UX DESING, DEVELOP I 2014.12 - 2015.01"
    }
  ]
};

// getters
const getters = {
};

// actions
const actions = {};

// mutations
const mutations = {
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
