// initial state
const state = {
  classColorList: [
    "",
    "lightGray",
    "",
    "lightGray",
    "lightGray",
    "",
    "lightGray",
    "",
    "",
    "lightGray",
    "",
    "lightGray",
    "lightGray",
    "",
    "lightGray",
    "",
    "",
    "lightGray",
    "",
    "lightGray",
  ],
  memberList: [
    {
      memberName: `루이지`,
      memberTeam: `CEO`,
      characterImage: "../../assets/images/pc/bg/members01.png",
    },
    {
      memberName: `지슈`,
      memberTeam: `CEO`,
      characterImage: "../../assets/images/pc/bg/members02.png",
    },
    {
      memberName: `아구몬`,
      memberTeam: `Management Supporter`,
      characterImage: "../../assets/images/pc/bg/members03.png",
    },
    {
      memberName: `스파크`,
      memberTeam: `Strategy Planning Manager`,
      characterImage: "../../assets/images/pc/bg/members04.png",
    },
    {
      memberName: `보노보노`,
      memberTeam: `Strategy Planning Manager`,
      characterImage: "../../assets/images/pc/bg/members05.png",
    },
    {
      memberName: `발키리`,
      memberTeam: `Strategy Planning`,
      characterImage: "../../assets/images/pc/bg/members06.png",
    },
    {
      memberName: `종이인형`,
      memberTeam: `Strategy Planning`,
      characterImage: "../../assets/images/pc/bg/members07.png",
    },
    {
      memberName: `고독한미식가`,
      memberTeam: `Creative Design`,
      characterImage: "../../assets/images/pc/bg/members08.png",
    },
    {
      memberName: `자갈치`,
      memberTeam: `Creative Design`,
      characterImage: "../../assets/images/pc/bg/members09.png",
    },
    {
      memberName: `된장남`,
      memberTeam: `Creative Design`,
      characterImage: "../../assets/images/pc/bg/members10.png",
    },
    {
      memberName: `한정판 레옹`,
      memberTeam: `Publisher Manager`,
      characterImage: "../../assets/images/pc/bg/members11.png",
    },
    {
      memberName: `윤계상`,
      memberTeam: `Publisher Manager`,
      characterImage: "../../assets/images/pc/bg/members12.png",
    },
    {
      memberName: `정나나`,
      memberTeam: `Publisher`,
      characterImage: "../../assets/images/pc/bg/members13.png",
    },
    {
      memberName: `뉴티리아`,
      memberTeam: `Publisher`,
      characterImage: "../../assets/images/pc/bg/members14.png",
    },
    {
      memberName: `앵그리버드`,
      memberTeam: `Developer Manager`,
      characterImage: "../../assets/images/pc/bg/members15.png",
    },
    {
      memberName: `화남이`,
      memberTeam: `Developer Manager`,
      characterImage: "../../assets/images/pc/bg/members16.png",
    },
    {
      memberName: `바람인형`,
      memberTeam: `Developer`,
      characterImage: "../../assets/images/pc/bg/members17.png",
    },
    {
      memberName: `어노잉사과`,
      memberTeam: `Developer`,
      characterImage: "../../assets/images/pc/bg/members18.png",
    },
    {
      memberName: ``,
      memberTeam: ``,
      characterImage: "",
    },
    {
      memberName: ``,
      memberTeam: ``,
      characterImage: "",
    },
  ],
};

// getters
const getters = {
  sortingMember: (state) => {
    let memberArray = null;
    //memberArray = state.memberList 이렇게 하지 않은 이유는 주소가 참조되어 버린다.
    memberArray = state.memberList.map((v) => v);
    // memberArray.sort(() => {
    //   return Math.random() - Math.random();
    // });
    for (let i = 0; i < memberArray.length; i++) {
      memberArray[i].classColor = state.classColorList[i];
    }
    return memberArray;
  },
};

// actions
const actions = {};

// mutations
const mutations = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
