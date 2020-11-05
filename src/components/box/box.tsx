import React from 'react';

import Styled, { StyledProps } from './styled';

interface DefaultProps {}

interface Props extends DefaultProps, StyledProps {
  children?: React.ReactNode;
  className?: string;
}

function Box({ children, ...rest }: Props) {
  return <Styled {...rest}>{children}</Styled>;
}

export default Box;
