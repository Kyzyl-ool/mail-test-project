import React from 'react';
import { Avatar } from 'components/Avatar';
import Title from 'components/Typography/Title';

export default {
  title: 'Avatar',
  component: Avatar
};

export const BasicUsage = () => (
  <>
    <Title>Avatar</Title>
    <Avatar rounded size={'small'} />
    <Avatar rounded size={'medium'} />
    <Avatar rounded size={'large'} />
    <br />
    <Avatar rounded size={'small'} src={'http://i.pravatar.cc/300?u=1'} />
    <Avatar rounded size={'medium'} src={'http://i.pravatar.cc/300?u=1'} />
    <Avatar rounded size={'large'} src={'http://i.pravatar.cc/300?u=1'} />
    <br />
    <Avatar rounded size={'small'} src={'http://i.pravatar.cc/300?u=2'} />
    <Avatar rounded size={'medium'} src={'http://i.pravatar.cc/300?u=2'} />
    <Avatar rounded size={'large'} src={'http://i.pravatar.cc/300?u=2'} />
  </>
);
