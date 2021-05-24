import { ApplicationState, ApplicationAction } from "./types";

export const initialState: ApplicationState = {
  messages: [],
  history: [],
  favorites: [],
  checked: [],
  search: "",
};

const reducer = (state = initialState, action: ApplicationAction): ApplicationState => {
  switch (action.type) {
    case "addMessage":
      return {
        ...state,
        messages: state.messages.concat(action.message),
      };
    case "removeMessage":
      return {
        ...state,
        messages: state.messages.slice(1),
      };
    case "hydrate":
      return {
        ...state,
        history: action.history,
        favorites: action.favorites,
      };
    case "toggleChecked":
      return {
        ...state,
        checked: state.checked.includes(action.id)
          ? state.checked.filter((id) => id !== action.id)
          : state.checked.concat(action.id),
      };
    default:
      return state;
  }
};

export default reducer;
