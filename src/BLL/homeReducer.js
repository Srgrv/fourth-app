const defaultState = {
  aboutMe: "Очень хороший программист",
  contacts: {
    facebook: "facebook.com/krozeal",
    website: "www.webdol.by",
    vk: "vk.com/krozeal",
    twitter: "twitter.com",
    instagram: "instagram.com",
    youtube: "youtube.com",
    github: "github.com/krozeal",
    mainLink: "mainlink.com/profile",
  },
  lookingForAJob: true,
  lookingForAJobDescription:
    "Хочу очень высокооплачиваемую работу и интересную",
  fullName: "Дмитрий Долидов",
  userId: 10,
  photos: {
    small:
      "https://social-network.samuraijs.com/activecontent/images/users/10/user-small.jpg?v=0",
    large:
      "https://social-network.samuraijs.com/activecontent/images/users/10/user.jpg?v=0",
  },
  posts: ["Hell", "ehll"],
};

const homeReducer = (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default homeReducer;
