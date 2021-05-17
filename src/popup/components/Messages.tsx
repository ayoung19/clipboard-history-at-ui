import React from "react";
import { remove, selectMessages } from "../store/messages";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useAppDispatch, useAppSelector } from "../util/hooks";
import { Message } from "./Message";

export const Messages = () => {
  const dispatch = useAppDispatch();
  const messages = useAppSelector(selectMessages);

  return (
    <TransitionGroup>
      {messages.map(({ id, text, type }, i) => (
        <CSSTransition
          key={id}
          timeout={300}
          classNames="notification"
          onEntered={() => {
            setTimeout(() => {
              dispatch(remove());
            }, 2000);
          }}
          unmountOnExit
        >
          <Message text={text} index={i} type={type} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};
