import React from 'react';
import { Container, Separator } from './styles'
import ServerButton from '../ServerButton'

const ServerList: React.FC = () => {
  <Container>
    <ServerButton isHome />

    <Separator />

    <ServerButton hasNotifications />
    <ServerButton mentions={3} />
    <ServerButton />
    <ServerButton asNotifications/>
    <ServerButton />
    <ServerButton mentions={73}/>
    <ServerButton />
    <ServerButton />
  </Container>
};

export default ServerList;