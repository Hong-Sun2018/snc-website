import React from 'react';

import Main from 'layouts/Main';
import Container from 'components/Container';
import { Contact, Hero } from './components';


const ContactView = () => {
  return (
    <Main colorInvert={true}>
      <Hero />
      <Contact />
    </Main>
  );
};

export default ContactView;
