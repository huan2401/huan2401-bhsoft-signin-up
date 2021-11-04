import userApi from "../api/userApi";

export const loadProfile =
  (email: string, password: string) => async (dispatch: any) => {
    try {
      const raw = JSON.stringify({
        user: {
          email: email,
          password: password,
        },
      });
      console.log(raw);
      const response: any = await userApi.login(raw);
      localStorage.setItem("token", response.user.token);
      console.log(response.user);
      dispatch(saveProfile(response.user));
      dispatch(getUser(response.user));
    } catch (error) {
      console.log(error);
    }
  };

export const getUserProfile = () => async (dispatch: any) => {
  try {
    const response: any = await userApi.getUserProfile();
    dispatch(getUser(response.user));
  } catch (error) {
    console.log(error);
  }
};

export const register =
  (username: string, email: string, password: string) =>
  async (dispatch: any) => {
    try {
      const raw = JSON.stringify({
        user: {
          username: username,
          email: email,
          password: password,
        },
      });
      const response: any = await userApi.register(raw);
      localStorage.setItem("token", response.user.token);
      dispatch(saveProfile(response.user));
    } catch (error) {
      console.log(error);
    }
  };

export const updateProfile =
  (
    picture: string,
    name: string,
    bio: string,
    email: string,
    password: string
  ) =>
  async (dispatch: any) => {
    try {
      const raw = JSON.stringify({
        user: {
          bio: bio,
          email: email,
          image: picture,
          password: password,
          username: name,
        },
      });
      const response: any = await userApi.updateProfile(raw);
      localStorage.setItem("token", response.user.token);
      dispatch(getUser(response.user));
    } catch (error) {
      console.log(error);
    }
  };

const saveProfile = (profile: any) => ({
  type: "SAVE-PROFILE",
  payload: profile,
});

const getUser = (profile: any) => ({
  type: "GET-USER",
  payload: profile,
});
