import React from 'react';
import MailingList from '../components/MailingList';

import { Content } from '../content/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const About = () => (
  <Main meta={<Meta title="Moody Foodie" description="Food for every mood" />}>
    <Content>
      <MailingList />
    </Content>
  </Main>
);

export default About;
