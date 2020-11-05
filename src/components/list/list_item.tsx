import React from 'react';

import { StyledListItem, StyledListItemProps } from './styled';

type DefaultStyledProps = 'display' | 'padding';

interface DefaultProps extends Pick<StyledListItemProps, DefaultStyledProps> {
}

interface Props extends DefaultProps, Omit<StyledListItemProps, DefaultStyledProps> {
  children?: React.ReactNode;
  className?: string;
}
function ListItem({ children, ...rest }: Props) {
  return <StyledListItem {...rest}>{children}</StyledListItem>;
}

ListItem.defaultProps = ((): DefaultProps => ({
  display: 'block',
  padding: '0.5rem',
}))();

export default ListItem;
