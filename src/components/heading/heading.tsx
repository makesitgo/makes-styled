import React from 'react';

import Styled, { StyledProps } from './styled';

interface DefaultProps {
  as: 'h1' | 'h2';
}

interface Props extends DefaultProps, StyledProps {
  children?: React.ReactNode;
  className?: string;
}

function Heading({ as, children, ...rest }: Props) {
  // FIXME: the 'any' typing here is b/c 'color' prop clashes with the internal types of html elements
  // for more info: https://github.com/styled-system/styled-system/issues/463
  const Component: any = Styled.withComponent(as);
  // NOTE: could be solved by writing our own "styled-system" (it's just a couple of functions)
  // or by re-naming "color" to something like "textColor", and then manually mappping the props back to "color"

  
  return <Component {...rest}>{children}</Component>;
}

Heading.defaultProps = {
  as: 'h1',
};

export default Heading;
