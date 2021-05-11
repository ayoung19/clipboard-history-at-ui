import React, { useEffect, useRef } from "react";

export const Background = () => {
    const ref = useRef<HTMLTextAreaElement>();
    let history;
    let current;

    const save = (history: Array<string>) => {
        chrome.storage.local.set({ "clipboard-history": history }, () => {});
        return history;
    }

    const read = () => {
        const { current: textarea } = ref;
        // TODO: Possible null value of textarea? maybe do some kind of "try again in 1s"
        textarea.value = '';
        textarea.focus();
        document.execCommand("paste");
        return textarea.value;
    }

    useEffect(() => {
        chrome.storage.local.get("clipboard-history", (result) => {
            history = result["clipboard-history"] || save([]);
            current = read();

            // TODO: Clear interval on unmount?
            setInterval(() => {
                const newest = read();
                if (current !== newest) {
                    current = newest;
                    history.push(current);
                    save(history);
                }
            }, 1000);
        });
    }, []);
    
    return <textarea ref={ref}></textarea>
}