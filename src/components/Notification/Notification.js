import React, { useState } from "react";

import { Container, Message, Icon } from "./NotificationStyles";

const Notification = ({ children }) => {
  const [remove, setRemove] = useState(false);

  setTimeout(() => {
    setRemove(true);
  }, 5000);

  return (
    <Container role="alert" remove={remove}>
      <Message>
        <Icon>
          <i className="fas fa-check-circle"></i>
        </Icon>
        {children}
      </Message>
    </Container>
  );
};

export default Notification;