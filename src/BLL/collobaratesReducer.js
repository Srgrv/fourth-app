const defaultState = {
  collobarates: [
    {
      name: "Sergey Georgiev",
      avatar: "../../public/logo192.png",
    },
    {
      name: "Kyshak Georgiev",
      avatar: "../../public/logo192.png",
    },
    {
      name: "Anastasia Danilova",
      avatar: "../../public/logo192.png",
    },
  ],
};

const collobarateReducer = (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default collobarateReducer;
