import React from "react";
import { selectMessages } from "../store/messages";
import { TransitionGroup } from "react-transition-group";
import { useAppSelector } from "../util/hooks";
import { Message } from "./Message";

export const Messages = () => {
  const messages = useAppSelector(selectMessages);

  return (
    <TransitionGroup>
      {messages.map(({ id, text, type }, i) => (
          <Message key={id} id={id} text={text} index={i} type={type} />
      ))}
    </TransitionGroup>
  );
};
