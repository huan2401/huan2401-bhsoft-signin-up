export function UserProfile(state: any, action: any) {
  switch (action.type) {
    case "SAVE-PROFILE":
      localStorage.setItem("token", action.payload.token);
      return {
        login: true,
      };
    case "GET-USER":
      return {
        username: action.payload.username,
      };
    case "LOGOUT":
      return {
        login: false,
      };
    default:
      return {
        login: false,
      };
  }
}
