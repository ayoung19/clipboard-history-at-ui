import { v4 as uuidv4 } from "uuid";
import { Type } from "../enums";
import { AddMessage, RemoveMessage, Hydrate, ToggleChecked, ToggleFavorited, RemoveItem } from "./types";

export const addMessage = (type: Type, text: string): AddMessage => ({
  type: "addMessage",
  message: {
    id: uuidv4(),
    type: type,
    text: text,
  },
});

export const removeMessage = (): RemoveMessage => ({
  type: "removeMessage",
});

export const hydrate = (history: HistoryItem[], favorited: string[]): Hydrate => ({
  type: "hydrate",
  history: history,
  favorited: favorited,
});

export const toggleChecked = (id: string): ToggleChecked => ({
  type: "toggleChecked",
  id: id,
});

export const toggleFavorited = (id: string): ToggleFavorited => ({
  type: "toggleFavorited",
  id: id,
});

export const removeItem = (id: string): RemoveItem => ({
  type: "removeItem",
  id: id,
});
