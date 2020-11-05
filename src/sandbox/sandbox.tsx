import React from 'react';
import { useTheme } from '@emotion/react'
import styled from '@emotion/styled';

import { Box, Heading, List, ListItem } from '../components';

const StyledSandbox = styled.div`
  width: 100%;
  padding: 2rem;
`;

function Sandbox() {
  // due to Emotion's ThemeProvider, we can use this hook here and get direct access to our (typed) theme
  const theme = useTheme()
  return (
    <StyledSandbox>
      <Box
        width={['100%', '95%', '80%', '61.2%']}
        border="1px solid white"
        m="0 auto"
        p="2rem 0"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Heading as="h2" color="green.4" fontSize="24px" mb="2rem">
          Nick Makes Presents:
        </Heading>
        <Heading color="mongodb.white" fontSize="48px">
          Styled 'N Out
        </Heading>
      </Box>
      <Box display="flex" justifyContent="space-evenly" my="2rem" flexWrap="wrap">
        <List flex={`0 1 ${theme.sizes[8]}px`} mt="2rem" mx="1rem">
          <ListItem>one</ListItem>
          <ListItem>two</ListItem>
          <ListItem>three</ListItem>
        </List>
        <List flush flex={`0 1 ${theme.sizes[8]}px`} mt="2rem" mx="1rem">
          <ListItem>one</ListItem>
          <ListItem>two</ListItem>
          <ListItem>three</ListItem>
        </List>
      </Box>
    </StyledSandbox>
  );
}

export default Sandbox;
