import styled from '@emotion/styled';
import {
  compose,
  flexbox,
  grid,
  layout,
  space,
  FlexboxProps,
  GridProps,
  LayoutProps,
  SpaceProps,
} from 'styled-system';

// using `ListItem` as a CSS selector in the List styles as well (for a "flush" effect)
import ListItem from './list_item';

export interface Props extends FlexboxProps, GridProps, LayoutProps, SpaceProps {
  flush: boolean;
}

const List = styled('ul')<Props>`
  ${compose(flexbox, grid, layout, space)}
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  ${({ flush }) =>
    flush && {
      [`${ListItem}`]: {
        borderRightWidth: 0,
        borderLeftWidth: 0,
        '&:first-of-type': {
          borderTopWidth: 0,
        },
        '&:last-of-type': {
          borderBottomWidth: 0,
        },
      },
    }}
`;

export default List;
