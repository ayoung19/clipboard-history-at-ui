import { Action } from "redux";
import { Type } from "../enums";

export interface Message {
  id: string;
  type: Type;
  text: string;
}

export interface ApplicationState {
  messages: Message[];
  history: HistoryItem[];
  favorited: string[];
  checked: string[];
  search: string;
}

export interface AddMessage extends Action {
  type: "addMessage";
  message: Message;
}

export interface RemoveMessage extends Action {
  type: "removeMessage";
}

export interface Hydrate extends Action {
  type: "hydrate";
  history: HistoryItem[];
  favorited: string[];
}

export interface ToggleChecked extends Action {
  type: "toggleChecked";
  id: string;
}

export interface ToggleFavorited extends Action {
  type: "toggleFavorited";
  id: string;
}

export interface RemoveItem extends Action {
  type: "removeItem";
  id: string;
}

export type ApplicationAction =
  | AddMessage
  | RemoveMessage
  | Hydrate
  | ToggleChecked
  | RemoveItem
  | ToggleFavorited;
