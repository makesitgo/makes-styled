import styled from '@emotion/styled';
import {
  compose,
  background,
  border,
  flexbox,
  grid,
  layout,
  position,
  shadow,
  space,
  typography,
  BackgroundProps,
  BorderProps,
  FlexboxProps,
  GridProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  TypographyProps,
} from 'styled-system';

import { makeShouldForwardProp } from '../../commons';

/*
 * You will notice the "color" prop is not included here.
 * You will also notice there is no `any` declaration needed in the `Box` component.
 */

const StyledBox = styled('div', {
  // "shouldForwardProp" controls what props are passed down to the rendered DOM element
  // can be useful, but usually not critical; definitely helps clean up the resulting HTML
  shouldForwardProp: makeShouldForwardProp(['width', 'display']),
})<StyledProps>`
  ${compose(
    background,
    border,
    flexbox,
    grid,
    layout,
    position,
    shadow,
    space,
    typography,
  )}
`;

export default StyledBox;

export interface StyledProps
  extends BackgroundProps,
    BorderProps,
    FlexboxProps,
    GridProps,
    LayoutProps,
    PositionProps,
    SpaceProps,
    TypographyProps {}
