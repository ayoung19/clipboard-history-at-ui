import React, { FC, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

// TODO: Make sure this mutex works correctly or if it's even needed.
function Mutex() {
  let current = Promise.resolve();
  this.lock = () => {
    let _resolve;
    const p = new Promise((resolve) => {
      _resolve = () => resolve();
    });
    // Caller gets a promise that resolves when the current outstanding
    // lock resolves
    const rv = current.then(() => _resolve);
    // Don't allow the next request until the new promise is done
    current = p;
    // Return the new promise
    return rv;
  };
}

export const Background: FC = () => {
  let history: HistoryItem[];
  let favorites: string[];
  let current: string;
  const mutex = new Mutex();
  const ref = useRef<HTMLTextAreaElement>();

  const critical = async (callback: () => void) => {
    const unlock = await mutex.lock();
    callback();
    unlock();
  };

  const save = () => {
    chrome.storage.local.set({
      storage: { history: history, favorites: favorites },
    });
  };

  const read = () => {
    const { current: textarea } = ref;
    // TODO: Possible null value of textarea? maybe do some kind of "try again in 1s"
    textarea.value = "";
    textarea.focus();
    document.execCommand("paste");
    return textarea.value;
  };

  const write = (value: string) => {
    const { current: textarea } = ref;
    textarea.value = value;
    textarea.select();
    document.execCommand("copy");
  };

  useEffect(() => {
    // history = [];
    // favorites = [];
    // save();
    chrome.storage.local.get("storage", ({ storage }) => {
      history = (storage && storage.history) || [];
      favorites = (storage && storage.favorites) || [];
      current = read();

      // TODO: Clear interval on unmount?
      setInterval(() => {
        critical(() => {
          const newest = read();
          if (current !== newest) {
            current = newest;
            history.push({
              id: uuidv4(),
              date: new Date(),
              value: current,
            });
            save();
          }
        });
      }, 1000);
    });

    chrome.runtime.onMessage.addListener((message) => {
      if (message.type === "copy") {
        critical(() => {
          current = message.payload;
          write(current);
        });
      }

      return false;
    });
  }, []);

  return <textarea ref={ref}></textarea>;
};
