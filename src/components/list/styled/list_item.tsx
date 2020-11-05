import styled, { StyledComponent } from '@emotion/styled';
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

export interface Props extends FlexboxProps, GridProps, LayoutProps, SpaceProps {}

// usually you won't have to type this Styled component,
// but since we're using `ListItem` as a CSS selector
// within its own definition to control top border widths
const ListItem: StyledComponent<any> = styled.li<Props>`
  ${compose(flexbox, grid, layout, space)}
  position: relative;
  ${({ theme }) => ({
    border: `1px solid ${theme.colors.mongodb.white}`,
  })}
  &:first-of-type {
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
  }
  & + ${() => ListItem} {
    border-top-width: 0;
  }
  &:last-of-type {
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
  }
`;

export default ListItem;
