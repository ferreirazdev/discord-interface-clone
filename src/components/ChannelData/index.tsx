import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if(div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);


  return (
    <Container>
      <Messages>
        <ChannelMessage
          author="Flavio Irineu"
          date="20/05/2021"
          content="Tá em Lockdown :("
        />

        <ChannelMessage
          author="Tua irmã"
          date="20/05/2021"
          content={
            <>
              <Mention>@Flávio Irineu</Mention>, Vem se Trancar aqui!
            </>
          }
          hasMention
          isBot
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre"/>
        <InputIcon />
      </InputWrapper>
    </Container>
  )
};

export default ChannelData;