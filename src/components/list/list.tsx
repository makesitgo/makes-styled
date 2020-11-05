import React from 'react';

import { StyledList, StyledListProps } from './styled';

interface DefaultProps {
  flush: boolean;
  ordered: boolean;
}

interface Props extends DefaultProps, StyledListProps {
  children?: React.ReactNode;
  className?: string;
}

function List({ children, ordered, ...rest }: Props) {
  const Component = ordered ? StyledList.withComponent('ol') : StyledList;
  return <Component {...rest}>{children}</Component>;
}

List.defaultProps = ((): DefaultProps => ({
  flush: false,
  ordered: false,
}))();

export default List;
