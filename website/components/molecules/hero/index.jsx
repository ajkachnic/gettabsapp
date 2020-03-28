import React from 'react';
import styled from '@emotion/styled';

import { Text, Spacer, Button, } from '../../index';
import breakpoints from '../../utils/breakpoints';

const Hero = ({title, body, buttonOne, buttonTwo}) => {
  const Hero = styled.div`
    background: #151515;
    padding: 5rem 0;
    display: grid;

    ${breakpoints.medium} {
      padding:3rem 0;
    }
    ${breakpoints.small} {
      padding: 2rem 0;
    }
  `;
  const Grid = styled.div`
    display: flex;
    margin: auto;
    justify-content: space-around;
    gap: 3em;

    ${breakpoints.medium} {
      gap: 2em;
    }
  `;
  return (
    <Hero>
      <Text type="h1" color="#FF5F8F" size="6rem" align="center">{title}</Text>
      <Spacer margin="1em 0" />
      <Text type="h3" color="#FFF" size="3rem" align="center">{body}</Text>
      <Spacer margin="1em 0" />
      <Grid>
        <Button>Register</Button>
        <Button bg="#fff" fg="#ff5f8f">Login</Button>
      </Grid>
    </Hero>
  )
}

export default Hero;