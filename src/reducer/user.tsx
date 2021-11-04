export function UserProfile(state: any, action: any) {
  switch (action.type) {
    case "SAVE-PROFILE":
      return {
        login: true,
        profile: action.payload,
      };
    case "GET-USER":
      return {
        login: true,
        profile: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}
