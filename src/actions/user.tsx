import axios from "axios";

export const loadProfile =
  (email: string, password: string) => async (dispatch: any) => {
    const url: string = "https://conduit.productionready.io/api/users/login";
    const raw = JSON.stringify({
      user: {
        email: email,
        password: password,
      },
    });
    axios
      .post(url, raw, {
        headers: {
          "content-type": "application/json",
        },
      })
      .then((response: any) => {
        dispatch(saveProfile(response.data.user));
      })
      .catch((error: any) => {
        alert("Tài khoản hoặc mật khẩu chưa đúng!");
        console.log(error);
      });
  };

export const getUserProfile = () => async (dispatch: any) => {
  const url: string = "https://conduit.productionready.io/api/user";
  axios
    .get(url, {
      headers: {
        "content-type": "application/json",
        Authorization: `Token ${localStorage.getItem("token")}`,
      },
    })
    .then((response: any) => {
      dispatch(getUser(response.data.user));
    })
    .catch((error: any) => {
      console.log(error);
    });
};

export const register =
  (username: string, email: string, password: string) =>
  async (dispatch: any) => {
    const url: string = "https://conduit.productionready.io/api/users";
    const raw = JSON.stringify({
      user: {
        username: username,
        email: email,
        password: password,
      },
    });
    axios
      .post(url, raw, {
        headers: {
          "content-type": "application/json",
        },
      })
      .then((response: any) => {
        dispatch(saveProfile(response.data.user));
      })
      .catch((error: any) => {
        alert("Tài khoản đã tồn tại!");
        console.log(error);
      });
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
    const url: string = "https://conduit.productionready.io/api/user";
    const raw = JSON.stringify({
      bio: bio,
      email: email,
      image: picture,
      password: password,
      username: name,
    });
    axios
      .put(url, raw, {
        headers: {
          "content-type": "application/json",
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
      })
      .then((response: any) => {
        console.log(response);
        // dispatch(saveProfile(response.data.user));
      })
      .catch((error: any) => {
        // alert("Email đã được sử dụng!");
        console.log(error);
      });
  };

export const createArticle =
  (body: string, description: string, tagList: string[], title: string) =>
  async (dispatch: any) => {
    const url: string = "https://conduit.productionready.io/api/articles";
    const raw = JSON.stringify({
      articles: {
        body: body,
        description: description,
        tagList: tagList,
        title: title,
      },
    });
    axios
      .post(url, raw, {
        headers: {
          "content-type": "application/json",
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
      })
      .then((response: any) => {
        console.log(response);
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

const saveProfile = (profile: any) => ({
  type: "SAVE-PROFILE",
  payload: profile,
});
export const logout = () => ({
  type: "LOGOUT",
});

const getUser = (profile: any) => ({
  type: "GET-USER",
  payload: profile,
});
