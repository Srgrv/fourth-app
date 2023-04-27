import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0",
  withCredentials: true,
  headers: {
    "API-KEY": "6b94c537-c724-4526-abc4-a919bf086fc0",
  },
});

export const userAPI = {
  getUsers(count, page) {
    return instance
      .get(`users`, {
        params: {
          count: count,
          page: page,
        },
      })
      .then((response) => {
        return response.data;
      });
  },
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`).then((response) => {
      console.log(response.data);
      return response.data;
    });
  },
};
